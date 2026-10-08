// theme.ts
import { createTheme } from "@mui/material/styles";

export const tokyoNightDark = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7aa2f7' },
    secondary: { main: '#bb9af7' },
    background: {
      default: '#1a1b26',
      paper: '#24283b',
    },
    text: {
      primary: '#a9b1d6',
      secondary: '#787c99',
    },
    error: { main: '#f7768e' },
    warning: { main: '#e0af68' },
    info: { main: '#0db9d7' },
    success: { main: '#9ece6a' },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Fira Code", "Roboto", sans-serif',
  },
});

// --- LIGHT MODE (Tokyo Night Day) ---
export const tokyoNightLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#34548a', // Deep terminal blue for visibility on light bg
      light: '#7aa2f7',
      dark: '#1f2335',
    },
    secondary: {
      main: '#5a4a78', // Deep purple
      light: '#bb9af7',
    },
    background: {
      default: '#e1e2e7', // Soft, cool off-white
      paper: '#f2f4f8',   // Slightly brighter card surfaces
    },
    text: {
      primary: '#383a42',   // Sharp dark gray/black text
      secondary: '#686b77', // Muted slate gray
      disabled: '#a0a3b0',
    },
    error: {
      main: '#f7768e', // Preserved vibrant elements
    },
    warning: {
      main: '#8c6c3e', // Darkened for better contrast on light bg
    },
    info: {
      main: '#0f7b8e',
    },
    success: {
      main: '#48762e',
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Fira Code", "Roboto", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(56, 58, 66, 0.05)', // Soft shadow instead of border glow
          border: '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});
