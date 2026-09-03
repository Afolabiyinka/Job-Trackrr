import { useMemo } from "react";
import { format, subDays } from "date-fns";
import { useJobs } from "@/modules/main/jobs/store/useJobs";

const formatStatusLabel = (status: string | null) => {
   if (!status) return "Unknown";
   return status.charAt(0).toUpperCase() + status.slice(1);
};

export const useAnalytics = () => {
   const jobs = useJobs((state) => state.jobs);

   const pieData = useMemo(() => {
      const counts: Record<string, number> = {
         Applied: 0,
         Interview: 0,
         Offer: 0,
         Rejected: 0,
      };

      jobs.forEach((job) => {
         const label = formatStatusLabel(job.status);
         counts[label] = (counts[label] || 0) + 1;
      });

      return Object.entries(counts)
         .map(([name, value]) => ({ name, value }))
         .filter((entry) => entry.value > 0);
   }, [jobs]);

   const barData = useMemo(() => {
      const days = 30;
      const buckets: Record<string, number> = {};

      for (let i = days - 1; i >= 0; i--) {
         const dayKey = format(subDays(new Date(), i), "MMM d");
         buckets[dayKey] = 0;
      }

      jobs.forEach((job) => {
         if (!job.appliedAt) return;

         const dayKey = format(new Date(job.appliedAt), "MMM d");
         if (dayKey in buckets) {
            buckets[dayKey] += 1;
         }
      });

      return Object.entries(buckets).map(([date, count]) => ({ date, count }));
   }, [jobs]);

   const successRate = jobs.length
      ? Math.round(
         (jobs.filter(
            (job) => job.status === "offer" || job.status === "interview",
         ).length /
            jobs.length) *
         100,
      )
      : 0;

   return {
      jobs,
      pieData,
      barData,
      successRate,
   };
};
