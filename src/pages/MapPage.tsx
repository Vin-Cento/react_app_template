import { Box, Typography } from "@mui/material";
import HomePage from "./HomePage";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { getTractOptions } from "../client/@tanstack/react-query.gen";
import LeafletMap from "../components/LeafletSelector";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function MapPage() {
  const [panel, __] = useState<
    "dashboard" | "wallet" | null
  >(null);
  const { data: censusData, isPending, isError, error } = useQuery(
    getTractOptions({
      path: {
        id: '0cf0f8fd-8aba-4e83-96cf-381a3378e7e0',
      },
    }),
  );

  const dispatch = useDispatch()
  const selectArea = useSelector(
    (state: RootState) => state.map.selectArea
  );
  console.log('selectArea', selectArea)
  return (
    <>
      <Box
        sx={{
          width: '30%',
          flexShrink: 0,
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          p: 2,
        }}
      >
        <Typography variant="h6">Tract {censusData?.censuscode}</Typography>
        {panel === "dashboard" && <HomePage />}
      </Box>
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          bgcolor: "background.default",
        }}
      >
        <Box sx={{ width: "100%", height: "100vh", p: 2 }}>
          <LeafletMap />
        </Box>
      </Box>
    </>
  )
}
