import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GeoJsonFeature } from "../client";
import L from "leaflet";

interface MapState {
  selectArea: GeoJsonFeature | undefined;
  focusArea: GeoJsonFeature | undefined;
  areas: GeoJsonFeature[] | undefined;
  center: L.LatLngTuple | undefined
}

const initialState: MapState = {
  center: undefined,
  selectArea: undefined,
  focusArea: undefined,
  areas: undefined,
};

const mapSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSelectArea: (state, action: PayloadAction<GeoJsonFeature>) => {
      state.selectArea = action.payload;
    },
    clearSelectArea: (state) => {
      state.selectArea = undefined;
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
