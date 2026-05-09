import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusColor } from "../../libs/utils";
import { Link, useNavigate } from "react-router-dom";
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
import Pagination from "@/components/pagination";
import { usePagination } from "../../hooks/usePagination";
import { useGetJobs } from "../../hooks/useGetJobs";
import Loader from "@/components/loader/Loader";
import { formatDistanceToNow } from "date-fns";
import { Briefcase, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// Add after the loading check


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
    all: data?.data.length,
    applied: appliedJobs.length,
    interview: interviewJobs.length,
    offer: offeredJobs.length,
    rejected: rejectedJobs.length,
  };

  const filteredJobs = {
    all: data?.data,
    applied: appliedJobs,
    interview: interviewJobs,
    offer: offeredJobs,
    rejected: rejectedJobs,
  }[activeFilter];


  {
    !loading && filteredJobs?.length === 0 && (
      <TableRow>
        <TableCell colSpan={4} className="h-96">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            {activeFilter === "all" ? (
              <>
                <Briefcase className="h-16 w-16 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold text-lg">No jobs yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Get started by adding your first job application
                  </p>
                </div>
                <Button asChild>
                  <Link to="/applications/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Job
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Search className="h-16 w-16 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold text-lg">No {activeFilter} jobs</h3>
                  <p className="text-sm text-muted-foreground">
                    Try a different filter or add more applications
                  </p>
                </div>
              </>
            )}
          </div>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <div className="h-full w-full flex flex-col gap-3 p-2">
      <div className="w-full flex justify-end">
        <Select
          onValueChange={(value) =>
            setActiveFilter(
              value as "all" | "applied" | "interview" | "offer" | "rejected",
            )
          }
        >
          <SelectTrigger className="rounded-full">
            {/* <FilterIcon /> */}
            <SelectValue placeholder="Filter by Status" />
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

      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Company email</TableHead>
            <TableHead>Date Applied</TableHead>
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
                    <span className="h-6 w-6 border rounded-full  flex items-center justify-center">
                      {job.company.charAt(0)}
                    </span>
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
                  <TableCell className="text-muted-foreground text-sm">
                    {job.interviewDate
                      ? formatDistanceToNow(new Date(job.interviewDate), {
                        addSuffix: true,
                      })
                      : "Not scheduled"}
                  </TableCell>                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
      {data?.data.length === 10 && (
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
