import { create } from "zustand";

interface ResumeStore {
  resumeText: string;
  setResumeText: (rt: string) => void;
}

export const useResume = create<ResumeStore>((set) => ({
  resumeText: "",
  setResumeText: (rt) => set({ resumeText: rt }),


}));
