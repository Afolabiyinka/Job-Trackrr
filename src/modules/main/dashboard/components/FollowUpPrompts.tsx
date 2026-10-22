import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useJobs } from "../../jobs/store/useJobs";

const FOLLOW_UP_AFTER_DAYS = 7;
const MAX_PROMPTS = 3;

const FollowUpPrompts = () => {
  const { jobs } = useJobs();
  const now = new Date();
  const followUps = jobs
    .filter((job) => {
      if (job.status !== "applied" || !job.appliedAt || job.interviewDate) {
        return false;
      }

      const appliedAt = new Date(job.appliedAt);
      return (
        !Number.isNaN(appliedAt.getTime()) &&
        now.getTime() - appliedAt.getTime() >=
          FOLLOW_UP_AFTER_DAYS * 24 * 60 * 60 * 1000
      );
    })
    .sort(
      (first, second) =>
        new Date(first.appliedAt as Date).getTime() -
        new Date(second.appliedAt as Date).getTime(),
    );

  const visibleFollowUps = followUps.slice(0, MAX_PROMPTS);

  return (
    <Card className="w-full shadow-none ring-0">
      <CardHeader>
        <CardTitle>Follow up</CardTitle>
        <CardDescription>
          Applications marked applied with no interview date after a week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {visibleFollowUps.length > 0 ? (
          <ul className="space-y-1">
            {visibleFollowUps.map((job) => (
              <li
                key={job.id ?? `${job.company}-${job.role}`}
                className="flex flex-col gap-3 rounded-xl p-3 transition-colors hover:bg-muted/60 sm:flex-row sm:items-center sm:justify-between"
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
                      Applied{" "}
                      {formatDistanceToNow(new Date(job.appliedAt as Date), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="self-start sm:self-auto"
                >
                  <Link to={job.id ? `/jobs/${job.id}` : "/jobs"}>
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
              No applications need a follow-up right now.
            </p>
          </div>
        )}
        {followUps.length > MAX_PROMPTS && (
          <Button asChild variant="link" className="mt-2 px-3">
            <Link to="/jobs">View all {followUps.length} applications</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default FollowUpPrompts;
