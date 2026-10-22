import { CalendarCheck2, CalendarClock, TrendingUp } from "lucide-react";
import { formatDate } from "../../../jobs/libs/utils";
import StatsCardItem from "./StatsCardItem";
import type { DashboardSummary } from "../../dashboard.types";

const StatsCard = ({ summary }: { summary: DashboardSummary }) => {
  const todaysDate = formatDate(new Date());

  return (
    <section aria-label="Job search overview" className="space-y-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {todaysDate}
          </p>
          <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Your job search
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          A snapshot of your progress so far
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <StatsCardItem
          value={summary.totalApplications}
          label={`Job ${summary.totalApplications === 1 ? "application" : "applications"}`}
          icon={<TrendingUp className="stroke-[1.5px] text-green-600" />}
        />
        <StatsCardItem
          value={summary.totalInterviews}
          label={summary.totalInterviews === 1 ? "Interview" : "Interviews"}
          icon={<CalendarCheck2 className="stroke-[1.5px] text-blue-600" />}
        />
        <StatsCardItem
          value={summary.upcomingInterviews}
          label="Upcoming interviews"
          icon={<CalendarClock className="stroke-[1.5px] text-primary" />}
        />
      </div>
    </section>
  );
};

export default StatsCard;
