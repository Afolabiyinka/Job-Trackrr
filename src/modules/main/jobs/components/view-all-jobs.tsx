import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pagination from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { getStatusColor } from "../libs/utils";
import { useGetJobs } from "../hooks/useGetJobs";
import Loader from "@/components/loader/Loader";
import { usePagination } from "../hooks/usePagination";

const ViewAllJobs = () => {
  const navigate = useNavigate();
  const { currentPage, handleNextPage, handlePrevPage } = usePagination();
  const { data, loading, error } = useGetJobs(currentPage);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          View more <ChevronRight />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>All Jobs</DialogTitle>
          <DialogDescription>Here are all your saved jobs.</DialogDescription>
        </DialogHeader>

        <div className="h-80 overflow-y-auto space-y-3 mt-4">
          {loading && (
            <div className="w-full h-full flex justify-center items-center">
              <Loader />
            </div>
          )}
          {error && <p>Error loading jobs</p>}

          {data?.jobs.length === 0 && (
            <div className="h-full w-full flex justify-center items-center text-3xl">
              No jobs Found
            </div>
          )}

          {data?.jobs.map((job) => (
            <span
              key={job.id}
              className="flex gap-2 items-center hover:bg-primary/80 hover:text-white p-1 rounded-2xl cursor-pointer justify-between"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              <span className="flex gap-2 items-center w-full">
                <span className="h-10 w-10 bg-gray-300 rounded-full border animate-pulse" />
                <span>
                  <p className="text-md font-bold tracking-wide line-clamp-1">
                    {job.company}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {job.companyEmail}
                  </p>
                </span>
              </span>

              <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
            </span>
          ))}
        </div>

        <DialogFooter className="mt-4">
          <Pagination
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewAllJobs;
