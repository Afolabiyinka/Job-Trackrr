import { useQuery } from "@tanstack/react-query";
import { getParticularJob } from "../services/job.request";
import { useUser } from "../../settings/store/useUser";

export const useGetJob = ({ id }: { id: string }) => {
  const { user } = useUser();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getParticularJob(id),
    enabled: !!user,
  });
  return {
    job: data?.job ?? null,
    loading: isLoading,
    error,
    refetch,
  };
};
