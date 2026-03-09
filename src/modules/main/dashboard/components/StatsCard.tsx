import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck2, TrendingUp, Clock } from "lucide-react";
import { useJobs } from "../../jobs/store/useJobs";
import { formatDate } from "../../jobs/libs/utils";
import { useInterviews } from "../../interviews/hooks/useInterview";

const StatsCard = () => {
  const { jobs } = useJobs();
  const { totalInterviews, upcomingInterviews } = useInterviews();

  const todaysDate = formatDate(new Date());

  // Reusable CardItem component
  const CardItem = ({
    value,
    label,
    icon,
  }: {
    value: number;
    label: string;
    icon: React.ReactNode;
  }) => (
    <div className="border rounded-xl p-4 flex justify-between items-center">
      {/* Left: Stat */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">{value}</h1>
        <p className="text-lg font-medium">{label}</p>
      </div>
      {/* Right: Icon */}
      <div
        className={`bg-muted flex justify-center items-center p-2 rounded-lg`}
      >
        {icon}
      </div>
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{todaysDate}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardItem
          value={jobs.length}
          label="Job Applications"
          icon={
            <TrendingUp className="stroke-[1px] text-green-600" size={30} />
          }
        />
        <CardItem
          value={totalInterviews}
          label="Total Interviews"
          icon={
            <CalendarCheck2 className="stroke-[1px] text-blue-600" size={30} />
          }
        />
        <CardItem
          value={upcomingInterviews}
          label="Upcoming Interviews"
          icon={<Clock className="stroke-[1px] text-orange-600" size={30} />}
        />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
