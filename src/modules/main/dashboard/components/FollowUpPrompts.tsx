import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import type { DashboardFollowUps } from "../dashboard.types";

const relativeDateFormatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});

const formatRelativeDate = (value: string) => {
  const date = new Date(value);
  const differenceInSeconds = (date.getTime() - Date.now()) / 1000;
  const units = [
    { unit: "year", seconds: 31_536_000 },
    { unit: "month", seconds: 2_592_000 },
    { unit: "week", seconds: 604_800 },
    { unit: "day", seconds: 86_400 },
    { unit: "hour", seconds: 3_600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ] as const;
  const unit = units.find(
    ({ seconds }) => Math.abs(differenceInSeconds) >= seconds,
  ) ?? { unit: "second", seconds: 1 };

  return relativeDateFormatter.format(
    Math.round(differenceInSeconds / unit.seconds),
    unit.unit,
  );
};

interface FollowUpPromptsProps {
  followUps: DashboardFollowUps;
}

const FollowUpPrompts = ({ followUps }: FollowUpPromptsProps) => {
  return (
    <Card className="h-full w-full rounded-2xl bg-background shadow-none ring-0">
      <CardHeader className="pb-3">
        <CardTitle>Follow up</CardTitle>
        <CardDescription>
          Applications waiting {followUps.thresholdDays}{" "}
          {followUps.thresholdDays === 1 ? "day" : "days"} for a response.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {followUps.items.length > 0 ? (
          <ul className="space-y-1">
            {followUps.items.map((job) => (
              <li
                key={job.jobId}
                className="flex flex-col gap-3 rounded-2xl bg-muted/30 p-3 transition-colors hover:bg-muted/60 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                  >
                    {job.company.trim().charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{job.company}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {job.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Applied {formatRelativeDate(job.appliedAt)}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="self-start sm:self-auto"
                >
                  <Link
                    to={`/jobs/${job.jobId}`}
                    aria-label={`Review ${job.role} at ${job.company}`}
                  >
                    Review application
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-4">
            <MailCheck
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-muted-foreground"
            />
            <p className="text-sm text-muted-foreground">
              No applications need follow-up.
            </p>
          </div>
        )}
        {followUps.total > followUps.items.length && (
          <p className="mt-3 px-3 text-sm text-muted-foreground">
            Showing {followUps.items.length} of {followUps.total} applications
            needing follow-up.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default FollowUpPrompts;
