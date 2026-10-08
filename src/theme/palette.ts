import type { PaletteOptions } from "@mui/material/styles";

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#7aa2f7",
    light: "#b4f9f8",
    dark: "#3d59a1",
  },
  secondary: {
    main: "#bb9af7",
    light: "#e0af68",
    dark: "#9d7cd8",
  },
  background: {
    default: "#1a1b26",
    paper: "#24283b",
  },
  text: {
    primary: "#a9b1d6",
    secondary: "#787c99",
    disabled: "#565f89",
  },
  error: { main: "#f7768e" },
  warning: { main: "#e0af68" },
  info: { main: "#0db9d7" },
  success: { main: "#9ece6a" },
};

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#34548a",
    light: "#7aa2f7",
    dark: "#1f2335",
  },
  secondary: {
    main: "#5a4a78",
    light: "#bb9af7",
  },
  background: {
    default: "#e1e2e7",
    paper: "#f2f4f8",
  },
  text: {
    primary: "#383a42",
    secondary: "#686b77",
    disabled: "#a0a3b0",
  },
  error: { main: "#f7768e" },
  warning: { main: "#8c6c3e" },
  info: { main: "#0f7b8e" },
  success: { main: "#48762e" },
};
