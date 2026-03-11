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

  // Reusable CardItem component


  return (
    <Card className="w-full h-full ring-0">
      <CardHeader>
        <CardTitle>{todaysDate}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCardItem
          value={jobs.length}
          label="Job Applications"
          icon={
            <TrendingUp className="stroke-[1px] text-green-600" size={30} />
          }
        />
        <StatsCardItem
          value={totalInterviews}
          label="Total Interviews"
          icon={
            <CalendarCheck2 className="stroke-[1px] text-blue-600" size={30} />
          }
        />
        <StatsCardItem
          value={upcomingInterviews}
          label="Upcoming Interviews"
          icon={<Clock className="stroke-[1px] text-orange-600" size={30} />}
        />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
