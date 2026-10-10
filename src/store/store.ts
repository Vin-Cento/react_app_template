import { configureStore } from "@reduxjs/toolkit"
import settingReducer from "./settingSlice"
import mapReducer from "./mapSlice"

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    map: mapReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
