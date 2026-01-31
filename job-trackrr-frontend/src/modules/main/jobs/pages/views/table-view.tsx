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
import { useJobs } from "../../hooks/useJobs";

const TableView = () => {
  const navigate = useNavigate();
  const { jobs } = useJobs();

  return (
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
        {jobs.map((job) => {
          return (
            <TableRow key={job.id} onClick={() => navigate(`/jobs/${job.id}`)}>
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
  );
};

export default TableView;
