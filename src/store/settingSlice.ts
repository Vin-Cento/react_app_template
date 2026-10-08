import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface SettingState {
  theme: Theme;
}

const initialState: SettingState = {
  theme: "dark",
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    }
  },
});

export const {
  setTheme,
  toggleTheme,
} = settingSlice.actions;

export default settingSlice.reducer;
