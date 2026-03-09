import { useJobs } from "../../jobs/store/useJobs";

export const useInterviews = () => {
  const { jobs } = useJobs();

  const interviewDates = jobs.map((job) => job.interviewDate);

  const totalInterviews = jobs.filter(
    (job) => job.status === "interview",
  ).length;

  const upcomingInterviews = jobs.filter(
    (job) =>
      job.status === "interview" && new Date(job.interviewDate) > new Date(),
  ).length;

  return {
    interviewDates,
    totalInterviews,
    upcomingInterviews,
  };
};
