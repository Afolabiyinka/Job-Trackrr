import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user.request";

export const useFetchUser = () => {
  const { data, isLoading, isFetched, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
  });

  return {
    fetchedUser: data,
    loading: isLoading,
    isFetched,
    error,
  };
};
