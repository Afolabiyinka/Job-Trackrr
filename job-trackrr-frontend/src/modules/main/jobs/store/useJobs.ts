import { create } from "zustand";
import type { Job } from "../types/job";

interface JobStore {
  jobs: Job[];
  setJob: (jobs: Job[]) => void;
}

export const useJobs = create<JobStore>((set) => ({
  jobs: [],
  setJob: (jobs) => set({ jobs: jobs }),
}));
