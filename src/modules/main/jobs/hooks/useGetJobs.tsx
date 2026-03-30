import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/request";

export const useGetJobs = (page: number = 1) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["jobs", page],
    queryFn: () => getAllJobs({ page }),
  });

  return {
    data,
    loading: isLoading,
    error,
    refetch,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 2,
  };
};
