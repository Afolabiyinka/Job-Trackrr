import { useQuery } from "@tanstack/react-query";
import { getParticularJob } from "../services/request";
import { useUser } from "../../settings/store/useUser";

export const useGetJob = ({ id }: { id: string }) => {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getParticularJob(id),
    refetchOnWindowFocus: true,
    retry: false,
    enabled: !!user,
  });
  return {
    job: data ?? null,
    loading: isLoading,
    error,
  };
};
