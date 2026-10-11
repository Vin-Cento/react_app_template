import { Box } from "@mui/material";
import LeafleSelector from "../components/map/LeafletSelector";
import MapSidePanel from "../components/map/MapSidePanel";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function MapPage() {
  const focusArea = useSelector(
    (state: RootState) => state.map.focusArea
  )

  return (
    <>
      {/* Left sidebar */}
      {focusArea &&
        <Box
          sx={{
            width: "30%",
            flexShrink: 0,
            borderRight: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            p: 2,
          }}
        >
          <MapSidePanel />
        </Box>
      }

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          bgcolor: "background.default",
          p: 2
        }}
      >
        <LeafleSelector />
      </Box>
    </>
  );
}
