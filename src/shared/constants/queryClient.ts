import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: false,
         refetchOnWindowFocus: false,
         refetchOnReconnect: false,
         staleTime: 1000 * 60 * 2,
         networkMode: "online"
      },
   },
});