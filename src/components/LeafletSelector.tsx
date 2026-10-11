import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import type { RootState } from "../store/store";
import { setSelectArea } from "../store/mapSlice";
import { fetchTract } from "../client/sdk.gen";
import type { GeoJsonFeature } from "../client";
import { useIPInfo } from "../hooks/useIPInfo";

export default function LeafletSelector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const resultsLayerRef = useRef<L.GeoJSON | null>(null);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const limit = 100;

  const {
    data: ipData,
    isPending: ipIsPending,
    isError: ipIsError,
    error: ipError,
    refetch: refetchIP,
  } = useIPInfo();

  const selectArea = useSelector(
    (state: RootState) => state.map.selectArea
  );

  const center = useSelector(
    (state: RootState) => state.map.center
  );

  // Query census tracts whenever selected polygon changes
  const {
    data: tract,
    isFetching: tractIsFetching,
    error: tractError,
  } = useQuery({
    queryKey: ["tracts", selectArea, page, limit],
    enabled: selectArea !== null,
    queryFn: async () => {
      if (!selectArea) {
        throw new Error("No polygon selected");
      }

      const { data, error } = await fetchTract({
        body: {
          type: "FeatureCollection",
          features: [selectArea],
        },
        query: {
          page,
          limit,
        },
      });

      if (error) throw error;
      if (!data) throw new Error("No data returned");

      return data;
    },
  });

  // Recenter map when IP location is available
  useEffect(() => {
    if (!ipData || !mapRef.current) return;

    mapRef.current.setView(
      [ipData.latitude, ipData.longitude],
      10
    );
  }, [ipData]);

  // Initialize Leaflet
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      // @ts-ignore
      center: center,
      zoom: 16,
    });

    mapRef.current = map;

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    ).addTo(map);

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

    const updatePolygon = (layer: L.Layer) => {
      if (!(layer instanceof L.Polygon)) return;

      const geojson = layer.toGeoJSON() as GeoJsonFeature;

      dispatch(setSelectArea(geojson));
      setPage(1);
    };

    const handleCreate = (event: { layer: L.Layer }) => {
      updatePolygon(event.layer);
    };

    const handleEdit = (event: { layer: L.Layer }) => {
      updatePolygon(event.layer);
    };

    map.on("pm:create", handleCreate);
    map.on("pm:edit", handleEdit);

    return () => {
      map.off("pm:create", handleCreate);
      map.off("pm:edit", handleEdit);
      map.remove();
      mapRef.current = null;
      resultsLayerRef.current = null;
    };
  }, [dispatch]);


  // Display returned census tract geometries
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove old census tract overlays
    if (resultsLayerRef.current) {
      map.removeLayer(resultsLayerRef.current);
      resultsLayerRef.current = null;
    }

    if (!tract?.data?.length) return;

    const featureCollection = {
      type: "FeatureCollection" as const,
      features: tract.data.map((item) => ({
        type: "Feature" as const,
        properties: {
          id: item.id,
          name: item.name,
          geoid: item.geoid,
        },
        geometry: item.geometry,
      })),
    };

    const resultLayer = L.geoJSON(
      featureCollection as GeoJSON.FeatureCollection,
      {
        style: {
          color: "#2196f3",
          weight: 2,
          fillColor: "#2196f3",
          fillOpacity: 0.2,
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(`
            <strong>${feature.properties?.name ?? ""}</strong>
            <p>GEOID: ${feature.properties?.geoid ?? ""}</p>
          `);
        },
      }
    ).addTo(map);

    resultsLayerRef.current = resultLayer;

    if (resultLayer.getBounds().isValid()) {
      map.fitBounds(resultLayer.getBounds());
    }
  }, [tract]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {ipIsPending && <CircularProgress />}

      {ipIsError && (
        <Alert
          severity="error"
          action={
            <Button onClick={() => refetchIP()}>
              Retry
            </Button>
          }
        >
          {ipError.message}
        </Alert>
      )}

      {/* Census tract results */}
      {selectArea && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1000,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            maxHeight: 300,
            overflow: "auto",
            minWidth: 200,
          }}
        >
          <Typography variant="h6">
            Census Tracts
          </Typography>

          {tractIsFetching && <CircularProgress size={20} />}

          {tractError && (
            <Alert severity="error">
              {String(tractError)}
            </Alert>
          )}

          {tract && (
            <>
              <Typography variant="body2">
                Found {tract.data.length} tracts on this page
              </Typography>

              {tract.data.map((item) => (
                <Typography
                  key={item.id}
                  variant="body2"
                >
                  {item.name}
                </Typography>
              ))}

              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Button
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </Button>

                <Button
                  disabled={tract.data.length < limit}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </Box>
            </>
          )}
        </Box>
      )}

      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
