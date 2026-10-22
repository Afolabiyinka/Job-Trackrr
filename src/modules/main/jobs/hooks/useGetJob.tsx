import { useQuery } from "@tanstack/react-query";
import { getParticularJob } from "../services/job.request";
import { useUser } from "../../settings/store/useUser";
import { queryKeys } from "@/shared/queryKeys";

export const useGetJob = ({ id }: { id: string }) => {
  const { user } = useUser();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.job.detail(id),
    queryFn: () => getParticularJob(id),
    enabled: !!user && !!id,
  });
  return {
    job: data?.job ?? null,
    loading: isLoading,
    error,
    refetch,
  };
};
