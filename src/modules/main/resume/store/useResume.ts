import { create } from "zustand";
import type { AnalysisType } from "../types/types";

interface ResumeStore {
  resumeText: string;
  setResumeText: (rt: string) => void;

  analysis: AnalysisType | null;
  setAnalysis: (a: AnalysisType) => void;
}

export const useResume = create<ResumeStore>((set) => ({
  resumeText: "",
  setResumeText: (rt) => set({ resumeText: rt }),

  analysis: null,
  setAnalysis: (a) => set({ analysis: a }),
}));
