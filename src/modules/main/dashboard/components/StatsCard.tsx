import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useJobs } from "../../jobs/store/useJobs";
import { formatDate } from "../../jobs/libs/utils";

const StatsCard = () => {
  const { jobs } = useJobs();

  const todaysDate = formatDate(new Date());
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="">{todaysDate}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="border p-3 rounded-xl">
          <span className="flex justify-between">
            <span className="flex items-center gap-3">
              <h1 className="text-xl font-bold">{jobs.length}</h1>
              <p className="text-lg">Job Applications</p>
            </span>
            <span className="bg-muted flex justify-center items-center p-2 rounded-lg">
              <TrendingUp className="stroke-[1px] text-green-600" size={30} />
            </span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
