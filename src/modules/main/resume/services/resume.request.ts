import { prodEndpoint } from "@/shared/constants/api-data";
import axios from "axios";
import type { AnalysisType } from "../types/resume.types";

async function analyseResume(resumeText: string): Promise<AnalysisType> {
  try {
    const res = await axios.post(
      `${prodEndpoint}api/resume`,
      { resumeText },
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
}

export { analyseResume };
