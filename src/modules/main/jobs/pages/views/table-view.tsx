import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusColor } from "../../libs/utils";
import { useNavigate } from "react-router-dom";
import { useFilterJobs } from "../../hooks/useFilterJobs";
import { useState } from "react";
import type { Job } from "../../types/job";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon } from "lucide-react";
import Pagination from "@/components/pagination";
import { usePagination } from "../../hooks/usePagination";
import { useGetJobs } from "../../hooks/useGetJobs";
import Loader from "@/components/loader/Loader";

const TableView = () => {
  const navigate = useNavigate();
  const { currentPage, handleNextPage, handlePrevPage } = usePagination();
  const { data, loading } = useGetJobs(currentPage);

  const { appliedJobs, interviewJobs, offeredJobs, rejectedJobs } =
    useFilterJobs();

  const [activeFilter, setActiveFilter] = useState<
    "all" | "applied" | "interview" | "offer" | "rejected"
  >("all");

  const counts = {
    all: data?.jobs.length,
    applied: appliedJobs.length,
    interview: interviewJobs.length,
    offer: offeredJobs.length,
    rejected: rejectedJobs.length,
  };

  const filteredJobs = {
    all: data?.jobs,
    applied: appliedJobs,
    interview: interviewJobs,
    offer: offeredJobs,
    rejected: rejectedJobs,
  }[activeFilter];

  return (
    <div className="h-full w-full flex flex-col gap-3">
      <div className="w-full flex justify-end">
        <Select
          onValueChange={(value) =>
            setActiveFilter(
              value as "all" | "applied" | "interview" | "offer" | "rejected",
            )
          }
        >
          <SelectTrigger className="flex">
            <FilterIcon />
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent className="p-1">
            <SelectItem value="all">All ({counts.all})</SelectItem>
            <SelectItem value="applied">Applied ({counts.applied})</SelectItem>
            <SelectItem value="interview">
              Interview ({counts.interview})
            </SelectItem>
            <SelectItem value="offer">Offer ({counts.offer})</SelectItem>
            <SelectItem value="rejected">
              Rejected ({counts.rejected})
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table className="h-full w-full mb-3">
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Company email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {loading ? (
            <div className="h-full w-full flex justify-center items-center border">
              <Loader />
            </div>
          ) : (
            filteredJobs?.map((job: Job) => {
              return (
                <TableRow
                  key={job.id}
                  onClick={() => navigate(`/jobs/${job.id}`)}
                >
                  <TableCell className="font-medium flex gap-2 items-center">
                    <span className="h-6 w-6 border rounded-full  animate-pulse" />
                    {job.company}
                  </TableCell>
                  <TableCell>{job.role}</TableCell>
                  <TableCell className="flex gap-2 items-center">
                    <span
                      className={`h-4 w-4 border rounded-full ${getStatusColor(
                        job.status,
                      )}`}
                    ></span>
                    {job.status}
                  </TableCell>
                  <TableCell>{job.companyEmail}</TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
      {data?.jobs.length === 10 && (
        <Pagination
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}
    </div>
  );
};

export default TableView;
