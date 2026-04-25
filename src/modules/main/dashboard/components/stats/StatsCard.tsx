import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck2, TrendingUp, Clock } from "lucide-react";
import { useJobs } from "../../../jobs/store/useJobs";
import { formatDate } from "../../../jobs/libs/utils";
import { useInterviews } from "../../../interviews/hooks/useInterview";
import StatsCardItem from "./StatsCardItem";

const StatsCard = () => {
  const { jobs } = useJobs();
  const { totalInterviews, upcomingInterviews } = useInterviews();

  const todaysDate = formatDate(new Date());

  // Correcting grammar
  const interviewText = totalInterviews === 1 ? "interview" : "interviews";
  const applicationText = jobs.length === 1 ? "application" : "applications";

  return (
    <Card className="w-full h-full ring-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{todaysDate}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-0 md:p-3">
        <StatsCardItem
          value={jobs.length}
          label={`Job ${applicationText}`}
          icon={
            <TrendingUp className="stroke-[1px] text-green-600" size={30} />
          }
        />
        <StatsCardItem
          value={totalInterviews}
          label={`Total ${interviewText}`}
          icon={
            <CalendarCheck2 className="stroke-[1px] text-blue-600" size={30} />
          }
        />
        <StatsCardItem
          value={upcomingInterviews}
          label={`Upcoming ${interviewText}`}
          icon={<Clock className="stroke-[1px] text-orange-600" size={30} />}
        />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
