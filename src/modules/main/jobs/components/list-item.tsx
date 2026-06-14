import { useNavigate } from "react-router-dom";
import { formatDate, getStatusColor } from "../libs/utils";
import type { Job } from "../types/job.types";

const ListItem = ({ job }: { job: Job }) => {
  const navigate = useNavigate();

  const interviewDate = job.interviewDate
    ? formatDate(job.interviewDate)
    : null;

  return (
    <div
      onClick={() => navigate(`/jobs/${job.id}`)}
      className="group flex flex-col md:flex-row justify-between gap-3 border rounded-4xl md:p-6 p-4 hover:bg-muted/50 transition cursor-pointer"
    >
      <div className="flex gap-3 items-center">
        <div className="h-10 w-10 rounded-full border flex items-center justify-center font-semibold">
          {job.company?.charAt(0) ?? "?"}
        </div>

        <div>
          <p className="font-semibold">{job.role}</p>

          <p className="text-sm text-muted-foreground">{job.company}</p>

          <div className="flex gap-2 mt-1 text-xs text-muted-foreground">
            {job.jobType && <span>{job.jobType}</span>}
            {job.workType && <span>• {job.workType}</span>}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:items-end gap-1">
        {job.status === "interview" && interviewDate && (
          <span className="text-xs text-muted-foreground">
            Interview: {interviewDate}
          </span>
        )}

        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${getStatusColor(job.status)}`}
          />
          <span className="text-sm font-medium capitalize">{job.status}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
