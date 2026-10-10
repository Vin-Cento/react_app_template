import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { useIPInfo } from "../hooks/useIPInfo";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function LeafletSelector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const { data: ipData, isPending, isError, error } = useIPInfo();
  let center = useSelector(
    (state: RootState) => state.map.center
  );
  if (!ipData) { } else { center = [ipData.latitude, ipData.longitude]; }


  useEffect(() => {
    if (!containerRef.current || mapRef.current || !center) return;
    // Initialize map
    const map = L.map(containerRef.current, {
      center: center,
      zoom: 10,
    });

    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    ).addTo(map);

    // Add drawing toolbar
    map.pm.addControls({
      position: "topleft",
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawCircle: false,
      drawText: false,
      drawPolygon: true,
      drawRectangle: true,
      editMode: true,
      dragMode: true,
      removalMode: true,
      cutPolygon: false,
      rotateMode: false,
    });

    // Handle newly drawn shapes
    map.on("pm:create", (event) => {
      const layer = event.layer;
      if (layer instanceof L.Polygon) {
        const geojson = layer.toGeoJSON();
        console.log("Drawn GeoJSON:", geojson);
      }
    });

    // Cleanup
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update map when IP data becomes available
  useEffect(() => {
    if (!ipData || !mapRef.current) return;
    mapRef.current.setView(
      [ipData.latitude, ipData.longitude],
      10
    );
  }, [ipData]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
