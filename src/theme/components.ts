import type { Components } from "@mui/material/styles";

export const darkComponents: Components = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        border: "1px solid #2ac3de33",
      },
    },
  },
};

export const lightComponents: Components = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,.05)",
        boxShadow: "0 4px 12px rgba(56,58,66,.05)",
      },
    },
  },
};
