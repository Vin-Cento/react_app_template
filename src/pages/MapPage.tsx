import { Box } from "@mui/material";
import LeafleSelector from "../components/map/LeafletSelector";
import MapSidePanel from "../components/map/MapSidePanel";


export default function MapPage() {

  return (
    <>
      {/* Left sidebar */}
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
