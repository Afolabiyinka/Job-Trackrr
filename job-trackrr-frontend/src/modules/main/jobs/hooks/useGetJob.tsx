import { useQuery } from "@tanstack/react-query";
import { getParticularJob } from "../services/request";

export const useGetJob = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getParticularJob(id),
  });
  return {
    job: data,
    loading: isLoading,
    error,
  };
};
