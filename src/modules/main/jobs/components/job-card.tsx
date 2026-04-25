import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getStatusColor, showInterviewIndicator } from "../libs/utils";
import type { Job, Status } from "../types/job";
import { useNavigate } from "react-router-dom";

import ViewAllJobs from "./view-all-jobs";
interface Props {
  jobs: Job[];
  title: string;
  desc: string;
  status: Status;
}
const JobCard = ({ jobs, title, desc, status }: Props) => {
  const navigate = useNavigate();

  return (
    <Card className={``}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {title}
          <span
            className={`h-6 w-6 ${getStatusColor(status)} rounded-full`}
          ></span>
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center">
        <div className="flex flex-col gap-3">
          {jobs.length === 0 ? (
            <div className="text-center">No {title} found</div>
          ) :
            jobs.slice(0, 3).map((job) => {
              const interviewIndicator = showInterviewIndicator(job.interviewDate);

              return (
                <span
                  key={job.id}
                  className="flex gap-2 items-center hover:bg-primary/80 p-2 rounded-full cursor-pointer relative"
                  onClick={() => navigate(`/jobs/${job.id}`)}
                >
                  <span className="h-10 w-10 flex justify-center items-center rounded-full border">
                    {job.company.charAt(0)}
                  </span>

                  <span>
                    <p className="text-md font-bold tracking-wide line-clamp-1">
                      {job.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {job.companyEmail ?? "No email"}
                    </p>
                  </span>

                  <span className="bg-green-300 absolute">
                    {interviewIndicator.upcoming ? (
                      <span className="h-2 w-2 bg-primary rounded-full animate-ping" />
                    ) : (
                      <span className="h-2 w-2 bg-red-500 rounded-full animate-ping" />
                    )}
                  </span>
                </span>
              );
            })
          }
        </div>
        <span className="mt-4 flex justify-center">
          {jobs.length === 3 && <ViewAllJobs />}
        </span>
      </CardContent>
    </Card>
  );
};

export default JobCard;
