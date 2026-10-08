import { createTheme } from "@mui/material/styles";
import {
  darkPalette,
  lightPalette,
} from "./palette";
import {
  darkComponents,
  lightComponents,
} from "./components";
import { typography } from "./typography";

export const themes = {
  dark: createTheme({
    palette: darkPalette,
    typography,
    components: darkComponents,
  }),

  light: createTheme({
    palette: lightPalette,
    typography,
    components: lightComponents,
  }),
};
