import { Box } from "@mui/material";
// import { useState } from "react";
import FocusAreaDescription from "./MapDescription";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";


export default function MapSidePanel() {
  const focusArea = useSelector(
    (state: RootState) => state.map.focusArea
  )


  return (
    <>
      {focusArea && (
        <>
          <Box
            sx={{ borderRadius: 3, overflow: "auto", maxHeight: "95vh" }}
          >
            <FocusAreaDescription area={focusArea} />
          </Box>
        </>
      )}
    </>
  );
}
