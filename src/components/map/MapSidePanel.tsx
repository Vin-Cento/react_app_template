import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
// import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { getTractOptions } from "../../client/@tanstack/react-query.gen";
import TextPlaceHolder from "../placeholder/TextPlaceHolder";


export default function MapSidePanel() {
  // const [panel, _] = useState<
  //   "dashboard" | "wallet" | null
  // >(null);

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
        <>
          <Box
            sx={{ borderRadius: 3, overflow: "auto", maxHeight: "95vh" }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: '15rem',
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
            <Typography variant="h4">
              Tract {censusData.censuscode}
            </Typography>
            <TextPlaceHolder />
          </Box>
        </>
      )}
    </>
  );
}
