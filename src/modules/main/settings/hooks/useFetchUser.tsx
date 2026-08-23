import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user.request";

export const useFetchUser = () => {
  const { data, isLoading, isFetched, error, refetch } = useQuery({
    queryKey: ["user"],
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
