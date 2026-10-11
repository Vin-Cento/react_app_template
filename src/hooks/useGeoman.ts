import { useEffect } from "react";
import L from "leaflet";

import "@geoman-io/leaflet-geoman-free";
import type { GeoJsonFeature } from "../client";
import { mapControls } from "../map";

export function useGeoman(
  map: L.Map | null,
  onPolygonCreated: (feature: GeoJsonFeature) => void
) {
  useEffect(() => {
    if (!map) return;

    map.pm.addControls(mapControls);

    const handleCreate = (event: { layer: L.Layer }) => {
      const layer = event.layer;

      if (!(layer instanceof L.Polygon)) return;

      const geojson =
        layer.toGeoJSON() as GeoJsonFeature;

      onPolygonCreated(geojson);

      // Keep the geometry in state, but not on the map
      map.removeLayer(layer);
    };

    map.on("pm:create", handleCreate);

    return () => {
      map.off("pm:create", handleCreate);
      map.pm.removeControls();
    };
  }, [map, onPolygonCreated]);
}
