import { useJobs } from "../../jobs/store/useJobs";

export const useInterviews = () => {
  const { jobs } = useJobs();

  const interviewJobs = jobs.filter((job) => job.interviewDate);

  const interviewDates = interviewJobs
    .map((job) => job.interviewDate)
    .filter((date): date is Date => date !== null);

  const totalInterviews = interviewJobs.length;

  const now = new Date();

  const upcomingInterviews = interviewJobs.filter(
    (job) => new Date(job.interviewDate as Date) > now,
  ).length;

  return {
    interviewDates,
    totalInterviews,
    upcomingInterviews,
  };
};
