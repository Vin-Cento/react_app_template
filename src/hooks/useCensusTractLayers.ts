import { useEffect } from "react";
import L from "leaflet";
import type { useCensusTracts } from "./useCensusTracts";

type TractData = NonNullable<
  ReturnType<typeof useCensusTracts>["data"]
>;

export function useCensusTractLayers(
  map: L.Map | null,
  tract: TractData | undefined
) {
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
      const features = tract.data.map((item) => ({
        type: "Feature" as const,
        properties: {
          id: item.id,
          name: item.name,
          geoid: item.geoid,
        },
        geometry: item.geometry,
      }));

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
