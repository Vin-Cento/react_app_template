import { useEffect } from "react";
import type L from "leaflet";

import "@geoman-io/leaflet-geoman-free";
import type { GeoJsonFeature } from "../client";
import { mapControls } from "../map";

export function useGeoman(
  map: L.Map | null,
  onPolygonCreated: (feature: GeoJsonFeature) => void
) {
  useEffect(() => {
    if (!map) return;

    const leafletMap = map; // TypeScript knows this is L.Map

    let cancelled = false;
    let handleCreate: ((event: { layer: L.Layer }) => void) | null = null;

    async function initializeGeoman() {
      const { default: L } = await import("leaflet");

      if (cancelled) return;

      leafletMap.pm.addControls(mapControls);

      handleCreate = (event: { layer: L.Layer }) => {
        const layer = event.layer;

        if (!(layer instanceof L.Polygon)) return;

        const geojson = layer.toGeoJSON() as GeoJsonFeature;

        onPolygonCreated(geojson);
        leafletMap.removeLayer(layer);
      };

      leafletMap.on("pm:create", handleCreate);
    }

    void initializeGeoman();

    return () => {
      cancelled = true;

      if (handleCreate) {
        leafletMap.off("pm:create", handleCreate);
      }

      leafletMap.pm?.removeControls();
    };
  }, [map, onPolygonCreated]);
}
