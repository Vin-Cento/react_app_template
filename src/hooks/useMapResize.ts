import { useEffect } from "react";
import type L from "leaflet";

export function useMapResize(map: L.Map | null) {
  useEffect(() => {
    if (!map) return;

    const observer = new ResizeObserver(() => {
      map.invalidateSize({ pan: false });
    });

    observer.observe(map.getContainer());

    return () => observer.disconnect();
  }, [map]);
}
