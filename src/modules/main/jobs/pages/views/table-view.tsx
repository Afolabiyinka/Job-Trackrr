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
import { useJobs } from "../../store/useJobs";
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

const TableView = () => {
  const navigate = useNavigate();
  const { jobs } = useJobs();
  const { appliedJobs, interviewJobs, offeredJobs, rejectedJobs } =
    useFilterJobs();

  const [activeFilter, setActiveFilter] = useState<
    "all" | "applied" | "interview" | "offer" | "rejected"
  >("all");

  const counts = {
    all: jobs.length,
    applied: appliedJobs.length,
    interview: interviewJobs.length,
    offer: offeredJobs.length,
    rejected: rejectedJobs.length,
  };

  const filteredJobs = {
    all: jobs,
    applied: appliedJobs,
    interview: interviewJobs,
    offer: offeredJobs,
    rejected: rejectedJobs,
  }[activeFilter];

  return (
    <div className="h-full w-full flex flex-col gap-3">
      <div className="w-full flex justify-end">
        <Select
          // value={activeFilter}
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

      <Table className="h-full w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Company email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job: Job) => {
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
          ) : (
            <div className="p-6 text-xl">No {activeFilter} jobs</div>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
