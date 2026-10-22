import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/job.request";
import { queryKeys } from "@/shared/queryKeys";

export const useGetJobs = (page: number = 1) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.jobs.list(page),
    queryFn: () => getAllJobs({ page }),
  });

  return {
    data,
    loading: isLoading,
    error,
    refetch,
  };
};
