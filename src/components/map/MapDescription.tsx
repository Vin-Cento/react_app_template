import { Box, Typography } from "@mui/material";
import TextPlaceHolder from "../placeholder/TextPlaceHolder";

interface Props {
  title: string;
}

export default function FocusAreaDescription({ title }: Props) {
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
      <Typography variant="h4">
        {title}
      </Typography>
      <TextPlaceHolder />
    </>
  );
}
