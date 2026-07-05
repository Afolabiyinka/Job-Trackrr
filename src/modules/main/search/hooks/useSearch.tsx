import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { searchJobs } from "../services/search.request";

export const useSearch = () => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 700);

  const {
    data: searchresults,
    error: searchError,
    isLoading: searchLoading,
    refetch,
  } = useQuery({
    queryKey: ["search-results", debouncedQuery],
    queryFn: () => searchJobs(debouncedQuery),
    enabled: !!debouncedQuery.trim(),
    retry: false,
    refetchOnWindowFocus: false,
  });
  return {
    searchLoading,
    searchresults,
    searchError,
    query,
    setQuery,
    refetch,
  };
};
