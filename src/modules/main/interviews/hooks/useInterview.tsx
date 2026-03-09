import { useJobs } from "../../jobs/store/useJobs";

export const useInterviews = () => {
  const { jobs } = useJobs();

  const interviewDates = jobs
    .map((job) => job.interviewDate)
    .filter((date): date is Date => date !== null);

  const totalInterviews = jobs.filter(
    (job) => job.status === "interview",
  ).length;

  const upcomingInterviews = jobs.filter(
    (job) =>
      job.status === "interview" &&
      job.interviewDate &&
      job.interviewDate > new Date(),
  ).length;

  return {
    interviewDates,
    totalInterviews,
    upcomingInterviews,
  };
};
