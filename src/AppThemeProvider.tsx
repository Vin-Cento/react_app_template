import { type ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { RootState } from "./store/store";
import { themes } from "./theme"

interface Props {
  children: ReactNode;
}

export default function AppThemeProvider({ children }: Props) {
  const mode = useSelector(
    (state: RootState) => state.setting.theme
  );


  return (
    <ThemeProvider theme={themes[mode]}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
