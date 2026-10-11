import { useEffect, useRef, useState } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

const DEFAULT_ZOOM = 12;

export function useLeafletMap(
  center: L.LatLngTuple | null
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  // Create and destroy the Leaflet instance
  useEffect(() => {
    if (!containerRef.current) return;

    const instance = L.map(containerRef.current, {
      center: undefined,
      zoom: DEFAULT_ZOOM,
    });

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    ).addTo(instance);

    setMap(instance);

    return () => {
      instance.remove();
    };
  }, []);

  // Update the map view without recreating it
  useEffect(() => {
    if (!map || !center) return;

    map.setView(center, DEFAULT_ZOOM);
  }, [map, center]);

  return { map, containerRef };
}
