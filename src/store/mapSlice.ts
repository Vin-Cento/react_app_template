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
