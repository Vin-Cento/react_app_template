import type { Components } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const darkComponents: Components<Theme> = {
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.contrastText,
        "& .MuiIconButton-root": {
          color: theme.palette.primary.light,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.secondary.main,
          },
        },
      }),
    },
  },
};

export const lightComponents: Components<Theme> = {
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.contrastText,
        "& .MuiIconButton-root": {
          color: theme.palette.primary.light,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.secondary.main,
          },
        },
      }),
    },
  },
};
