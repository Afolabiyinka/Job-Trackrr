import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellRing, CalendarClock } from "lucide-react";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { formatDate } from "@/modules/main/jobs/libs/utils";
import InterviewBadge from "../../jobs/components/interview-badge";

const InterviewRemindersCard = () => {
  const { jobs } = useJobs();

  const reminders = jobs
    .filter((job) => job.interviewDate)
    .sort(
      (a, b) =>
        new Date(a.interviewDate as Date).getTime() -
        new Date(b.interviewDate as Date).getTime(),
    );
  return (
    <Card className="w-full ring-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div>
          <CardTitle className="flex items-center gap-2">
            <BellRing className="h-4 w-4 text-primary" />
            Interview reminders
          </CardTitle>
          <CardDescription>
            {reminders.length > 0
              ? `${reminders.length} upcoming interview${reminders.length > 1 ? "s" : ""} to keep an eye on`
              : "No interview reminders yet"}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {reminders.length === 0 ? (
          <div className="rounded-xl border border-dashed p-1 md:p-4 text-sm text-muted-foreground">
            Add interview dates to your jobs to get reminders here.
          </div>
        ) : (
          reminders.map((job) => {
            return (
              <div
                key={job.id ?? `${job.company}-${job.role}`}
                className="rounded-xl border bg-muted/20 p-4"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.role}</p>
                  </div>

                  <InterviewBadge interviewDate={job.interviewDate} />
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarClock className="h-4 w-4" />
                  {formatDate(job.interviewDate)}
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
};

export default InterviewRemindersCard;
