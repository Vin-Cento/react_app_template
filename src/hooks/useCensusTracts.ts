import { useQuery } from "@tanstack/react-query";
import { fetchTract } from "../client/sdk.gen";
import type { GeoJsonFeature } from "../client";

export function useCensusTracts(
  selectArea: GeoJsonFeature | null,
  page: number,
  limit = 100
) {
  return useQuery({
    queryKey: ["tracts", selectArea, page, limit],
    enabled: selectArea !== null,

    queryFn: async () => {
      if (!selectArea) { throw new Error("No polygon selected") }

      const { data, error } = await fetchTract({
        body: {
          type: "FeatureCollection",
          features: [selectArea],
        },
        query: { page, limit },
      });

      if (error) throw error;
      if (!data) throw new Error("No data returned");

      return data;
    },
  });
}
