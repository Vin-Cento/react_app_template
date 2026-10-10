import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GeoJsonFeature } from "../client";
import L from "leaflet";

interface MapState {
  selectArea: GeoJsonFeature;
  center: L.LatLngTuple | null
}

const initialState: MapState = {
  center: [39.7392, -104.9903],
  selectArea: {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-104.994686, 39.902362],
          [-105.233539, 39.725145],
          [-104.963113, 39.475426],
          [-104.570515, 39.660685],
          [-104.994686, 39.902362],
        ],
      ],
    },
  },
};

const mapSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSelectArea: (state, action: PayloadAction<GeoJsonFeature>) => {
      state.selectArea = action.payload;
    },
    setCenter: (state, action: PayloadAction<L.LatLngTuple>) => {
      state.center = action.payload
    },
  },
});

export const {
  setSelectArea,
  setCenter,
} = mapSlice.actions;

export default mapSlice.reducer;
