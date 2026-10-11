import { useEffect } from "react";
import L from "leaflet";
import type { useCensusTracts } from "./useCensusTracts";
import { useDispatch } from "react-redux";
import { setArea, setFocusArea } from "../store/mapSlice";

type TractData = NonNullable<
  ReturnType<typeof useCensusTracts>["data"]
>;

export function useCensusTractLayers(
  map: L.Map | null,
  tract: TractData | undefined
) {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!map) return;

    // create a resultsLayer start
    const resultsLayer = L.geoJSON(undefined, {
      style: {
        color: "#2196f3",
        weight: 2,
        fillColor: "#2196f3",
        fillOpacity: 0.2,
      },

      onEachFeature: (feature, layer) => {
        const container = document.createElement("div");
        const name = document.createElement("strong");
        const geoid = document.createElement("p");

        name.textContent =
          String(feature.properties?.name ?? "");

        geoid.textContent =
          `GEOID: ${feature.properties?.geoid ?? ""}`;

        container.append(name, geoid);
        layer.bindPopup(container);
      },
    });
    // create a resultsLayer end

    if (tract?.data?.length) {
      const focusArea = tract.data[0]
      dispatch(setArea(tract.data))
      dispatch(setFocusArea(focusArea))
      const features = [{
        type: "Feature" as const,
        properties: {
          id: focusArea.id,
          name: focusArea.name,
          geoid: focusArea.geoid,
        },
        geometry: focusArea.geometry,
      }]

      resultsLayer.addData({
        type: "FeatureCollection",
        features,
      } as GeoJSON.FeatureCollection);

      resultsLayer.addTo(map);

      const bounds = resultsLayer.getBounds();

      if (bounds.isValid()) {
        map.fitBounds(bounds);
      }
    }

    return () => {
      map.removeLayer(resultsLayer);
    };
  }, [map, tract]);
}
