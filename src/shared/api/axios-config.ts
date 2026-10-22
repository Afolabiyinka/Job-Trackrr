import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { testingEndpoint } from "./api-data";

export const apiClient = axios.create({
   baseURL: testingEndpoint,
   headers: { Accept: "application/json" },
   withCredentials: true,
});

type RetryConfig = InternalAxiosRequestConfig & { _retry?: boolean };

let refreshPromise: Promise<unknown> | null = null;

apiClient.interceptors.response.use(
   (response) => response,
   async (error: AxiosError) => {
      const original = error.config as RetryConfig | undefined;
      const url = original?.url ?? "";
      const isAuthRoute = url.includes("/auth/");

      if (error.response?.status !== 401 || !original || original._retry || isAuthRoute) {
         return Promise.reject(error);
      }

      original._retry = true;

      try {
         // all concurrent 401s share one refresh call
         refreshPromise ??= apiClient
            .post("/auth/refresh")
            .finally(() => {
               refreshPromise = null;
            });
         await refreshPromise;
         return apiClient.request(original);
      } catch (refreshError) {
         if (window.location.pathname !== "/login") {
            window.location.href = "/login";
         }
         return Promise.reject(refreshError);
      }
   },
);
