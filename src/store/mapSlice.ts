import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GeoJsonFeature } from "../client";
import L from "leaflet";

interface MapState {
  selectArea: GeoJsonFeature | null;
  center: L.LatLngTuple | null
}

const initialState: MapState = {
  center: null,
  selectArea: null,
};

const mapSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSelectArea: (state, action: PayloadAction<GeoJsonFeature>) => {
      state.selectArea = action.payload;
    },
    clearSelectArea: (state) => {
      state.selectArea = null;
    },
    setCenter: (state, action: PayloadAction<L.LatLngTuple>) => {
      state.center = action.payload
    },
  },
});

export const {
  setSelectArea,
  clearSelectArea,
  setCenter,
} = mapSlice.actions;

export default mapSlice.reducer;
