import { useParams, useNavigate } from "react-router-dom";
import type { Status } from "../types/job";
import LoadingContainer from "@/components/loader/loadingcontainer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Building2,
  CalendarClockIcon,
  DollarSign,
  Pencil,
  User,
} from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";
import { formatDate, getStatusColor } from "../libs/utils";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import DeleteJobModal from "../components/delete-job/delete-job";
import { NumericFormat } from "react-number-format";
import { useGetJob } from "../hooks/useGetJob";

const JobPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid job ID</div>;
  }
  const navigate = useNavigate();
  const { job, error, loading } = useGetJob({ id });

  if (loading) return <LoadingContainer />;
  if (error) return <div>Failed to load job</div>;
  if (!job) return <div>Job not found</div>;

  const formatedInterviewDate = formatDate(job.interviewDate);
  const formatedAppliedAtDate = formatDate(job?.appliedAt);

  return (
    <div className="mx-auto p-1">
      <Button onClick={() => navigate(-1)} size={`lg`} className="mb-6">
        <ArrowLeft className="mr-2" />
        Go back
      </Button>

      <div className="flex flex-col md:flex-row  md:justify-between  items-center p-2">
        <span className="font-medium flex gap-2 items-center  p-2 rounded-xl cursor-pointer">
          <span className="h-16 w-16  rounded-full border  flex justify-center items-center">
            <Building2 size={40} className="stroke-[1px]" />
          </span>
          <span>
            <p className="text-lg font-bold tracking-wide line-clamp-1">
              {job.company}
            </p>
            <span className="flex gap-2">
              <p>{job.companyEmail}</p>
              <CopyButton value={job.companyEmail} />
            </span>
          </span>
        </span>

        <div className="flex gap-2">
          <CreateJobStepper
            title="Edit Job Details"
            icon={<Pencil />}
            editing={true}
            id={job.id}
          />
          <DeleteJobModal id={id} />
        </div>
      </div>

      <div className="rounded-xl p-5 mt-3  mb-6">
        <div className="flex justify-between border-b mb-2 p-3">
          <h3 className="text-3xl font-semibold  border-gray-200 flex items-center gap-2">
            <User size={30} />
            {job.role}
          </h3>
          <span className="flex items-center gap-2 shadow p-2 rounded-3xl">
            <CalendarClockIcon />
            <h3>{formatedInterviewDate}</h3>
            <span className="h-3 border w-3 bg-primary rounded-full animate-ping" />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          <div>
            <span className="flex gap-2">
              <span
                className={`h-4 w-4 border rounded-full ${getStatusColor(job.status as Status)}`}
              />
              <p className="text-sm  mb-1">Status</p>
            </span>
            <p className="font-medium text-lg">{job.status}</p>
          </div>
          <div>
            <p className="text-sm  mb-1">Job Type</p>
            <p className="font-medium text-lg">{job.jobType}</p>
          </div>
          <div>
            <p className="text-sm  mb-1">Work Type</p>
            <p className="font-medium text-lg">{job.workType}</p>
          </div>
          {job.interviewType && (
            <div>
              <p className="text-sm  mb-1">Interview Type</p>
              <p className="font-medium text-lg">{job.interviewType}</p>
            </div>
          )}
          {job.appliedAt && (
            <div>
              <p className="text-sm  mb-1">Applied At</p>
              <p className="font-medium text-lg">{formatedAppliedAtDate}</p>
            </div>
          )}

          <div>
            <p className="text-sm  mb-1 flex items-center ">
              <DollarSign size={17} />
              Salary Range
            </p>
            <NumericFormat
              className="font-medium text-lg"
              value={job.salaryRange}
              thousandSeparator
              // prefix="$"
            />
          </div>
        </div>
      </div>

      {job.feedback && (
        <div className=" border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Feedback</h3>
          <p className="text-gray-700 leading-relaxed">{job.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default JobPage;
