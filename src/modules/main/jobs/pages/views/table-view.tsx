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
import { Badge } from "@/components/ui/badge";

const TableView = () => {
  const navigate = useNavigate();
  const { jobs } = useJobs();
  const { appliedJobs, interviewJobs, offeredJobs, rejectedJobs } =
    useFilterJobs();

  const [filterJobs, setFilterJobs] = useState<Job[]>(jobs);
  const [activeFilter, setActiveFilter] = useState<boolean>(false);

  return (
    <div className="h-full w-full flex flex-col gap-3">
      <div className="p-2 w-full border rounded-full grid grid-cols-10">
        <Badge
          onClick={() => {
            setFilterJobs(jobs);
            setActiveFilter(true);
          }}
          variant={`${activeFilter ? "default" : "outline"}`}
        >
          All
        </Badge>
        <Badge
          onClick={() => {
            setFilterJobs(appliedJobs);
            setActiveFilter(true);
          }}
          variant={`${activeFilter ? "default" : "outline"}`}
        >
          Applied
        </Badge>
        <Badge
          onClick={() => {
            setFilterJobs(interviewJobs);
            setActiveFilter(true);
          }}
          variant={`${activeFilter ? "default" : "outline"}`}
        >
          Interview
        </Badge>
        <Badge
          onClick={() => {
            setFilterJobs(offeredJobs);
            setActiveFilter(true);
          }}
          variant={`${activeFilter ? "default" : "outline"}`}
        >
          Offer
        </Badge>
        <Badge
          onClick={() => {
            setFilterJobs(rejectedJobs);
            setActiveFilter(true);
          }}
          variant={`${activeFilter ? "default" : "outline"}`}
        >
          Rejected
        </Badge>
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
          {filterJobs.map((job: Job) => {
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
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
