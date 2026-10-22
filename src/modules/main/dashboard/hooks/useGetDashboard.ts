import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../services/dashboard.request";
import { queryKeys } from "@/shared/queryKeys";

export const useGetDashboard = () =>
  useQuery({
    queryKey: queryKeys.dashboard,
    queryFn: getDashboard,
  });
