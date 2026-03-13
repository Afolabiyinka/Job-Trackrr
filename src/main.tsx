import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import LoadingContainer from "./components/loader/loadingcontainer.tsx";
import { queryClient } from "./shared/constants/queryClient.ts";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<LoadingContainer />}>
      <App />
    </Suspense>
  </QueryClientProvider>,
);
