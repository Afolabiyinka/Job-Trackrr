import { useNavigate } from "react-router-dom";
import { formatDate, getStatusColor } from "../libs/utils";
import type { Job } from "../types/job";

const ListItem = ({ job }: { job: Job }) => {
  const interviewDate = formatDate(job.interviewDate);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col md:flex-row gap-2 justify-between items-center border rounded-xl hover:bg-muted cursor-pointer p-4"
      onClick={() => navigate(`/app/jobs/${job.id}`)}
    >
      <div className="flex gap-2 items-center">
        <span className="h-6 w-6 border rounded-full animate-pulse" />
        <p className="text-md font-medium">
          {job.role} at {job.company}
        </p>
      </div>

      <span>
        {job.status === "interview" && (
          <span className="text-xs text-muted-foreground">
            Interview: {interviewDate}
          </span>
        )}
      </span>
      {/* Status + Badge + Interview Date */}
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <span
          className={`h-4 w-4 ${getStatusColor(job.status)} rounded-full`}
        />
        <span className="text-sm font-medium">{job.status}</span>
      </div>
    </div>
  );
};
export default ListItem;
