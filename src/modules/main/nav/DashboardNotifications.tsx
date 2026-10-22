import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "@/modules/main/jobs/libs/utils";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { Bell, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardNotifications = () => {
  const { jobs } = useJobs();
  const reminders = jobs
    .filter((job) => job.interviewDate)
    .sort(
      (first, second) =>
        new Date(first.interviewDate as Date).getTime() -
        new Date(second.interviewDate as Date).getTime(),
    );

  const reminderCount = reminders.length;
  const reminderLabel =
    reminderCount === 1 ? "interview reminder" : "interview reminders";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label={
            reminderCount > 0
              ? `${reminderCount} ${reminderLabel}`
              : "No interview reminders"
          }
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
            {reminderCount > 0
              ? `${reminderCount} upcoming ${reminderLabel}`
              : "Your scheduled interviews will appear here."}
          </PopoverDescription>
        </PopoverHeader>

        {reminders.length > 0 ? (
          <ul className="max-h-[min(60vh,24rem)] space-y-1 overflow-y-auto px-2 pb-2">
            {reminders.map((job) => (
              <li
                key={job.id ?? `${job.company}-${job.role}`}
                className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-muted/70"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                >
                  {job.company.trim().charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="truncate text-sm font-medium">{job.company}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    Interview for {job.role}
                  </p>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarClock aria-hidden="true" className="h-3.5 w-3.5" />
                    {formatDate(job.interviewDate)}
                  </span>
                </div>
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
