import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/request";

export const useGetJobs = () => {
  const {
    data: jobs = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
  });
  return {
    jobs,
    loading: isLoading,
    error,
    refetch,
  };
};
