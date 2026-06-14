import { create } from "zustand";
import type { AnalysisType } from "../types/resume.types";

interface ResumeStore {
  resumeText: string;
  setResumeText: (rt: string) => void;
  analysis: AnalysisType | null,
  setAnalysis: (analysis: AnalysisType) => void
}

export const useResume = create<ResumeStore>((set) => ({
  resumeText: "",
  setResumeText: (rt) => set({ resumeText: rt }),
  analysis: null,
  setAnalysis: (analysis) => set({ analysis: analysis })

}));
