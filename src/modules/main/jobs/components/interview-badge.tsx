import { CalendarClockIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { showInterviewIndicator } from "../libs/utils";

interface InterviewBadgeProps {
  interviewDate: Date | string | null;
  label?: string;
  className?: string;
}

const InterviewBadge = ({
  interviewDate,
  label,
  className,
}: InterviewBadgeProps) => {
  const indicator = showInterviewIndicator(interviewDate);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium",
        indicator.upcoming
          ? "border-primary/30 bg-primary/5 text-primary"
          : "border-muted bg-muted/40 text-muted-foreground",
        className,
      )}
    >
      <CalendarClockIcon size={14} className="stroke-[1.5px]" />
      {label ?? indicator.message}
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full animate-ping",
          indicator.upcoming ? "bg-primary" : "bg-red-500",
        )}
      />
    </span>
  );
};

export default InterviewBadge;
