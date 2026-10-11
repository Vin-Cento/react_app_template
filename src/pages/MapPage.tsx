import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import HomePage from "./HomePage";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { getTractOptions } from "../client/@tanstack/react-query.gen";
import LeafleSelector from "../components/map/LeafletSelector";


export default function MapPage() {
  const [panel, _] = useState<
    "dashboard" | "wallet" | null
  >(null);

  const {
    data: censusData,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery(
    getTractOptions({
      path: {
        id: "0cf0f8fd-8aba-4e83-96cf-381a3378e7e0",
      },
    })
  );

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
        {isPending && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {isError && (
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => refetch()}
              >
                Retry
              </Button>
            }
          >
            {error.detail?.map((err) => err.msg).join(", ") ??
              "An unexpected error occurred"}
          </Alert>
        )}

        {censusData && (
          <Typography variant="h6">
            Tract {censusData.censuscode}
          </Typography>
        )}

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
          <LeafleSelector />
        </Box>
      </Box>
    </>
  );
}
