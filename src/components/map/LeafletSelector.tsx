import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import type { RootState } from "../../store/store";
import { setCenter } from "../../store/mapSlice";

import { useIPInfo } from "../../hooks/useIPInfo";
import { useCensusTracts } from "../../hooks/useCensusTracts";

import LeafletMap from "./LeafletMap";
import CensusTractPanel from "./CensusTractPanel";

const LIMIT = 100;

export default function LeafletSelector() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const selectArea = useSelector(
    (state: RootState) => state.map.selectArea
  );

  const {
    data: ipData,
    isPending: ipIsPending,
    isError: ipIsError,
    error: ipError,
    refetch: refetchIP,
  } = useIPInfo();

  const tractQuery = useCensusTracts(
    selectArea,
    page,
    LIMIT
  );

  // Save IP location in Redux
  useEffect(() => {
    if (!ipData) return;

    dispatch(
      setCenter([
        ipData.latitude,
        ipData.longitude,
      ])
    );
  }, [ipData, dispatch]);

  const handleSelectionChange = useCallback(() => {
    setPage(1);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <LeafletMap
        tract={tractQuery.data}
        onSelectionChange={handleSelectionChange}
      />

      {ipIsPending && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 72,
            zIndex: 1000,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {ipIsError && (
        <Alert
          severity="error"
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            zIndex: 1000,
          }}
          action={
            <Button
              onClick={() => refetchIP()}
            >
              Retry
            </Button>
          }
        >
          {ipError?.message}
        </Alert>
      )}

      {selectArea && (
        <CensusTractPanel
          query={tractQuery}
          page={page}
          limit={LIMIT}
          setPage={setPage}
        />
      )}
    </Box>
  );
}
