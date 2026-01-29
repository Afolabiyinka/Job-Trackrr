import { useParams, useNavigate } from "react-router-dom";
import type { Job, Status } from "../types/job";
import LoadingContainer from "@/components/loader/loadingcontainer";
import { useJobs } from "../hooks/useJobs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pencil } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";
import { getStatusColor } from "../libs/utils";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import DeleteJobModal from "../components/delete-job/delete-job";

const JobPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid job ID</div>;
  }
  const navigate = useNavigate();
  const { jobs, loading, error } = useJobs();

  // Find the job in the jobs array by ID
  const job = jobs.find((job: Job) => job.id === id);

  if (loading) return <LoadingContainer />;
  if (error) return <div>Failed to load jobs</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="mx-auto p-3">
      <Button onClick={() => navigate(-1)} size={`lg`} className="mb-6">
        <ArrowLeft className="mr-2" />
        Go back
      </Button>

      <div className="flex flex-col md:flex-row  md:justify-between  items-center p-2">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">{job.company}</h1>
          <h2 className="text-xl">{job.role}</h2>
        </div>

        <div className="flex gap-2 w-full md:w-1/2">
          <CreateJobStepper
            title="Edit Job Details"
            icon={<Pencil />}
            editing={true}
            id={job.id}
          />
          <DeleteJobModal id={job?.id} />
        </div>
      </div>

      <div className="shadow shadow-gray-600 rounded-lg p-5 mt-3  mb-6">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          Job Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <span className="flex gap-2 items-center">
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
          {/* {job.appliedAt && (
            <div>
              <p className="text-sm  mb-1">Applied At</p>
              <p className="font-medium text-lg">
                {new Date(job.appliedAt).toLocaleDateString()}
              </p>
            </div>
          )} */}
          {job.interviewDate && (
            <div>
              <p className="text-sm  mb-1">Interview Date</p>
              <p className="font-medium text-lg">
                {new Date(job.interviewDate).toLocaleDateString()}
              </p>
            </div>
          )}
          <div className="flex gap-16 items-center">
            <span>
              <p className="text-sm  mb-1">Company Email</p>
              <p className="font-medium text-lg break-all">
                {job.companyEmail}
              </p>
            </span>
            <CopyButton value={job.companyEmail} />
          </div>
          <div>
            <p className="text-sm  mb-1">Salary Range</p>
            <p className="font-medium text-lg">
              {job.salaryRange ? `$${job.salaryRange}` : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {job.feedback && (
        <div className=" border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Feedback</h3>
          <p className="text-gray-700 leading-relaxed">{job.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default JobPage;
