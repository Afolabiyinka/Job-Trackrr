import { Card, CardContent } from "@/components/ui/card";
import { ApplicationsBarChart } from "../components/ApplicationsBarChart";
import { StatusBreakdownChart } from "../components/StatusBreakdownChart";
import { useAnalytics } from "../hooks/useAnalytics";
import EmptyAnalytics from "./EmptyAnalytics";

const Analytics = () => {
  const { jobs, pieData, barData, successRate } = useAnalytics();

  if (jobs.length === 0) return <EmptyAnalytics />;

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Insights into your job search performance.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <StatusBreakdownChart data={pieData} />
        <ApplicationsBarChart data={barData} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Success rate</p>
            <p className="mt-2 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-4xl font-bold text-transparent">
              {successRate}%
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Interview + offer / total
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total applications</p>
            <p className="mt-2 text-4xl font-bold">{jobs.length}</p>
            <p className="mt-1 text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Active pipeline</p>
            <p className="mt-2 text-4xl font-bold">
              {
                jobs.filter(
                  (job) =>
                    job.status === "applied" || job.status === "interview",
                ).length
              }
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Still in play</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
