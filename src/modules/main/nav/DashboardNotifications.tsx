import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetDashboard } from "@/modules/main/dashboard/hooks/useGetDashboard";
import { Bell, CalendarClock, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const interviewDateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

const DashboardNotifications = () => {
  const { data, isError, isPending, refetch } = useGetDashboard();
  const reminders = data?.interviewReminders.items ?? [];
  const reminderCount = data?.interviewReminders.total ?? 0;
  const hasDashboardData = data !== undefined;
  const isInitialLoading = isPending && !hasDashboardData;
  const isInitialError = isError && !hasDashboardData;
  const reminderLabel =
    reminderCount === 1 ? "interview reminder" : "interview reminders";
  const triggerLabel = isInitialLoading
    ? "Interview reminders loading"
    : isInitialError
      ? "Interview reminders unavailable"
      : reminderCount > 0
        ? `${reminderCount} ${reminderLabel}`
        : "No interview reminders";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label={triggerLabel}
          variant="secondary"
          size="icon-lg"
          className="relative"
        >
          <Bell aria-hidden="true" />
          {reminderCount > 0 && (
            <span
              aria-hidden="true"
              className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-primary-foreground"
            >
              {reminderCount > 99 ? "99+" : reminderCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-[min(22rem,calc(100vw-2rem))] gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-xl ring-0"
      >
        <PopoverHeader className="gap-1 px-4 pb-3 pt-4">
          <PopoverTitle className="text-base">Notifications</PopoverTitle>
          <PopoverDescription>
            {isInitialLoading
              ? "Loading your interview reminders..."
              : isInitialError
                ? "Interview reminders could not be loaded."
                : reminderCount > reminders.length
                  ? `Showing ${reminders.length} of ${reminderCount} upcoming interviews`
                  : reminderCount > 0
                    ? `${reminderCount} upcoming ${reminderLabel}`
                    : "Your scheduled interviews will appear here."}
          </PopoverDescription>
        </PopoverHeader>

        {isInitialLoading ? (
          <p role="status" className="px-4 pb-4 text-sm text-muted-foreground">
            Loading reminders...
          </p>
        ) : isInitialError ? (
          <div className="flex flex-col items-start gap-3 px-4 pb-4">
            <p role="alert" className="text-sm text-muted-foreground">
              We couldn&apos;t load your reminders. Please try again.
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              onClick={() => void refetch()}
            >
              <RefreshCw aria-hidden="true" className="h-4 w-4" />
              Try again
            </Button>
          </div>
        ) : reminders.length > 0 ? (
          <ul className="max-h-[min(60vh,24rem)] space-y-1 overflow-y-auto px-2 pb-2">
            {reminders.map((job) => (
              <li key={job.jobId}>
                <Link
                  to={`/jobs/${job.jobId}`}
                  aria-label={`View ${job.role} interview at ${job.company}`}
                  className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                  >
                    {job.company.trim().charAt(0).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1 space-y-1">
                    <span className="block truncate text-sm font-medium">
                      {job.company}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      Interview for {job.role}
                      {job.interviewType &&
                        ` · ${job.interviewType === "In_Person" ? "In person" : "Virtual"}`}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarClock
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                      {interviewDateFormatter.format(
                        new Date(job.interviewAt),
                      )}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-4 pb-4 text-sm text-muted-foreground">
            Add an interview date to a job to get a reminder here.
          </p>
        )}

        <div className="p-2 pt-0">
          <Button asChild variant="ghost" className="w-full rounded-xl">
            <Link to="/interviews">View all interviews</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardNotifications;
