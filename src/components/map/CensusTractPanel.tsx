import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { useCensusTracts } from "../../hooks/useCensusTracts";

interface Props {
  query: ReturnType<typeof useCensusTracts>;
  page: number;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CensusTractPanel({
  query,
  page,
  limit,
  setPage,
}: Props) {
  const { data, isFetching, error } = query;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        zIndex: 1000,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
        maxHeight: 300,
        overflow: "auto",
        minWidth: 200,
      }}
    >
      <Typography variant="h6">
        Census Tracts
      </Typography>

      {isFetching && <CircularProgress size={20} />}

      {error && (
        <Alert severity="error">
          {String(error)}
        </Alert>
      )}

      {data && (
        <>
          <Typography variant="body2">
            Found {data.data.length} tracts on this page
          </Typography>

          {data.data.map((item) => (
            <Typography
              key={item.id}
              variant="body2"
            >
              {item.name}
            </Typography>
          ))}

          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Button
              disabled={page === 1 || isFetching}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>

            <Button
              disabled={
                isFetching ||
                data.data.length < limit
              }
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
