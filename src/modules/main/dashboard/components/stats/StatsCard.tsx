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

  const interviewText = totalInterviews === 1 ? "Interview" : "Interviews";
  const applicationText = jobs.length === 1 ? "application" : "applications";

  return (
    <Card className="w-full h-full ring-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{todaysDate}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-4 p-2">
        <StatsCardItem
          value={jobs.length}
          label={`Job ${applicationText}`}
          icon={<TrendingUp className="stroke-[1.5px] text-green-600" />}
        />
        <StatsCardItem
          value={totalInterviews}
          label={interviewText}
          icon={<CalendarCheck2 className="stroke-[1.5px] text-blue-600" />}
        />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
