import { getErrorMessage } from "@/shared/lib/errorMsg";
import type { AnalysisType } from "../types/resume.types";
import { apiClient } from "@/shared/api/axios-config";

async function analyseResume(file: File): Promise<AnalysisType> {
  try {
    const formData = new FormData();

    formData.append("resume", file);

    const res = await apiClient.post<AnalysisType>(
      "/resume",
      formData,
      {
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    throw new Error(getErrorMessage(err));
  }
}

export { analyseResume };
