import { create } from "zustand";
import type { AnalysisType } from "../types/resume.types";

interface ResumeStore {
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
  analysis: AnalysisType | null;
  setAnalysis: (analysis: AnalysisType | null) => void;
  reset: () => void;
}

export const useResume = create<ResumeStore>((set) => ({
  resumeFile: null,
  setResumeFile: (file) =>
    set({
      resumeFile: file,
      analysis: null,
    }),
  analysis: null,
  setAnalysis: (analysis) => set({ analysis }),
  reset: () => set({ resumeFile: null, analysis: null }),
}));
