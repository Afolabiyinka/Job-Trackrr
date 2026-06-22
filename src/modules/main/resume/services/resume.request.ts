import type { AnalysisType } from "../types/resume.types";
import { apiClient } from "@/shared/api/axios-config";

async function analyseResume(resumeText: string): Promise<AnalysisType> {
  try {
    const res = await apiClient.post(
      `/resume`,
      { resumeText },

    );
    return res.data;
  } catch (err) { throw err; }

}

export { analyseResume };
