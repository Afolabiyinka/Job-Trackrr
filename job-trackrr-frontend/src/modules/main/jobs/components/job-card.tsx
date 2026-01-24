import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getStatusColor } from "../libs/utils";
import type { Job, Status } from "../types/job";
import { useNavigate } from "react-router-dom";
interface Props {
  jobs: Job[];
  title: string;
  desc: string;
  status: Status;
}
const JobCard = ({ jobs, title, desc, status }: Props) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {title}
          <span
            className={`h-6 w-6 ${getStatusColor(status)} rounded-full`}
          ></span>
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {jobs.length === 0 ? (
            <div>No {title} found</div>
          ) : (
            jobs?.map((job, i) => (
              <span
                key={i}
                className="font-medium flex gap-2 items-center hover:bg-primary p-2 rounded-lg cursor-pointer"
                onClick={() => navigate(`/jobs/${job.id}`)}
              >
                <span className="h-16 w-16 bg-gray-300 rounded-full border animate-pulse" />
                <span>
                  <p className="text-lg font-bold tracking-wide">
                    {job.company}
                  </p>
                  <p>{job.companyEmail}</p>
                </span>
              </span>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
