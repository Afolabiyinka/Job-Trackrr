import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck2, TrendingUp } from "lucide-react";
import { useJobs } from "../../../jobs/store/useJobs";
import { formatDate } from "../../../jobs/libs/utils";
import { useInterviews } from "../../../interviews/hooks/useInterview";
import StatsCardItem from "./StatsCardItem";

const StatsCard = () => {
  const { jobs } = useJobs();
  const { totalInterviews } = useInterviews();

  const todaysDate = formatDate(new Date());

  // Correcting grammar
  const interviewText = totalInterviews === 1 ? "interview" : "interviews";
  const applicationText = jobs.length === 1 ? "application" : "applications";

  return (
    <Card className="w-full h-full ring-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{todaysDate}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-4 lg:grid-cols-4 gap-4 p-0 md:p-3">
        <StatsCardItem
          value={jobs.length}
          label={`Job ${applicationText}`}
          icon={
            <TrendingUp className="stroke-[1px] text-green-600" size={30} />
          }
        />
        <StatsCardItem
          value={totalInterviews}
          label={`${interviewText}`}
          icon={
            <CalendarCheck2 className="stroke-[1px] text-blue-600" size={30} />
          }
        />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
