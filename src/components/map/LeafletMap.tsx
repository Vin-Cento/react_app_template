import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { setSelectArea } from "../../store/mapSlice";
import type { GeoJsonFeature } from "../../client";

import { useLeafletMap } from "../../hooks/useLeafletMap";
import { useGeoman } from "../../hooks/useGeoman";
import { useCensusTractLayers } from "../../hooks/useCensusTractLayers";
import type { useCensusTracts } from "../../hooks/useCensusTracts";

interface Props {
  tract: ReturnType<typeof useCensusTracts>["data"];
  onSelectionChange: () => void;
}

export default function LeafletMap({
  tract,
  onSelectionChange,
}: Props) {
  const dispatch = useDispatch();

  const center = useSelector(
    (state: RootState) => state.map.center
  );

  const { map, containerRef } = useLeafletMap(center);

  const handlePolygonCreated = useCallback(
    (feature: GeoJsonFeature) => {
      dispatch(setSelectArea(feature));
      onSelectionChange();
    },
    [dispatch, onSelectionChange]
  );

  useGeoman(map, handlePolygonCreated);
  useCensusTractLayers(map, tract);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
