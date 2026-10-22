import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user.request";
import { queryKeys } from "@/shared/queryKeys";

export const useFetchUser = () => {
  const { data, isLoading, isFetched, error, refetch } = useQuery({
    queryKey: queryKeys.user,
    queryFn: getUser,
  });

  return {
    fetchedUser: data,
    loading: isLoading,
    isFetched,
    refetch,
    error,
  };
};
