import { useQuery } from "@tanstack/react-query";
import { fetchIPInfo } from "../api/ipApi";

export function useIPInfo(ip?: string) {
  return useQuery({
    queryKey: ["ipInfo", ip ?? "current"],
    queryFn: () => fetchIPInfo(ip),
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
}
