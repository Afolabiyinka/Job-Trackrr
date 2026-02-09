import { useJobs } from "../store/useJobs";

export const useFilterJobs = () => {
  const { jobs } = useJobs();

  const appliedJobs = jobs.filter((job) => job.status === "applied");
  const interviewJobs = jobs.filter((job) => job.status === "interview");
  const offeredJobs = jobs.filter((job) => job.status === "offer");
  const rejectedJobs = jobs.filter((job) => job.status === "rejected");

  return {
    appliedJobs,
    interviewJobs,
    offeredJobs,
    rejectedJobs,
  };
};
