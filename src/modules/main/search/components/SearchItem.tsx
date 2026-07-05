import { useNavigate } from "react-router-dom";
import { getStatusColor } from "../../jobs/libs/utils";
import type { Job } from "../../jobs/types/job.types";

const SearchItem = ({ job }: { job: Job }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-between  w-full gap-2 items-center hover:bg-primary/80 hover:text-white p-1 md:p-2 rounded-full cursor-pointer relative"
      onClick={() => navigate(`/jobs/${job.id}`)}
    >
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-full border flex items-center justify-center font-semibold">
          {job.company?.charAt(0) ?? "?"}
        </div>

        <p className="text-sm font-medium">{job.company}</p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center">
        <span
          className={`h-2.5 w-2.5 rounded-full shrink-0 ${getStatusColor(job.status ?? "applied")}`}
        />

        <span className="px-2 py-0.5 rounded-full font-medium capitalize">
          {job.status}
        </span>
      </div>
    </div>
  );
};

export default SearchItem;
