import { create } from "zustand";
import type { Job } from "../types/job";

interface JobStore {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
}

export const useJobs = create<JobStore>((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs: jobs }),
}));
