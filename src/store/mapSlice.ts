import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CensusTractSchema, GeoJsonFeature } from "../client";
import L from "leaflet";

interface MapState {
  selectArea: GeoJsonFeature | null;
  areas: CensusTractSchema[] | null;
  focusArea: CensusTractSchema | null;
  center: L.LatLngTuple | null
}

const initialState: MapState = {
  center: null,
  selectArea: null,
  focusArea: null,
  areas: null,
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
    setArea: (state, action: PayloadAction<CensusTractSchema[]>) => {
      state.areas = action.payload;
    },
    clearArea: (state) => {
      state.areas = null;
    },
    setFocusArea: (state, action: PayloadAction<CensusTractSchema>) => {
      state.focusArea = action.payload;
    },
    clearFocusArea: (state) => {
      state.focusArea = null;
    },
    setCenter: (state, action: PayloadAction<L.LatLngTuple>) => {
      state.center = action.payload
    },
  },
});

export const {
  setSelectArea,
  clearSelectArea,
  setArea,
  clearArea,
  setFocusArea,
  clearFocusArea,
  setCenter,
} = mapSlice.actions;

export default mapSlice.reducer;
