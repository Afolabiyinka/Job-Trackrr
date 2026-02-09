import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/request";

export const useFetchUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    fetchedUser: data,
    loading: isLoading,
    error,
  };
};
