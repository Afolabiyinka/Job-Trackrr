import { create } from "zustand";
import type { Job } from "../types/job.types";

interface JobStore {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  jobsLength: number,
  setJobsLength: (length: number) => void
}

export const useJobs = create<JobStore>((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs: jobs }),
  jobsLength: 0,
  setJobsLength: (length) => set({ jobsLength: length })
}));
