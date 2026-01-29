import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/request";

export const useJobs = () => {
  const {
    data: jobs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
  });
  return {
    jobs,
    loading: isLoading,
    error,
  };
};
