import { Box, Typography } from "@mui/material";
import HomePage from "./HomePage";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { getTractOptions } from "../client/@tanstack/react-query.gen";

export default function MapPage() {
  const [panel, __] = useState<
    "dashboard" | "wallet" | null
  >(null);
  const { data, isPending, isError, error } = useQuery(
    getTractOptions({
      path: {
        id: '0cf0f8fd-8aba-4e83-96cf-381a3378e7e0',
      },
    }),
  );
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
        <Typography variant="h4">Census Tract</Typography>
        {data?.aland}
        {panel === "dashboard" && <HomePage />}
      </Box>
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h2">County</Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
