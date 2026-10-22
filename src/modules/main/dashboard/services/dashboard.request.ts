import { apiClient } from "@/shared/api/axios-config";
import { getErrorMessage } from "@/shared/lib/errorMsg";
import type { DashboardResponse } from "../dashboard.types";

export const getDashboard = async (): Promise<DashboardResponse> => {
  try {
    const response = await apiClient.get<DashboardResponse>("/dashboard");
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
