import { Box, Typography } from "@mui/material";
import type { CensusTractSchema } from "../../client";

interface Props {
  area: CensusTractSchema;
}

export default function FocusAreaDescription({ area }: Props) {
  return (
    <>
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
      <Typography variant="h4" sx={{ m: 1 }}>
        {area.censuscode}
      </Typography>
      <Typography variant="body1">
        Tract {area.censuscode} is located in the state of {area.state_name} within the county of {area.namelsadco}.
      </Typography>
    </>
  );
}
