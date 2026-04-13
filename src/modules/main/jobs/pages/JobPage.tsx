import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarCheck,
  CalendarClockIcon,
  ClipboardList,
  DollarSign,
  Laptop,
  MessageSquare,
  Pencil,
  User,
} from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";
import {
  formatDate,
  getStatusColor,
  showInterviewIndicator,
} from "../libs/utils";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import DeleteJobModal from "../components/delete-job/delete-job";
import { NumericFormat } from "react-number-format";
import { useGetJob } from "../hooks/useGetJob";
import JobPageSkeleton from "../components/loading-skeleton";

const JobPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid job ID</div>;
  }

  const navigate = useNavigate();
  const { job, error, loading } = useGetJob({ id });

  if (job) {
    document.title = `${job.role} at ${job.company}`;
  }
  if (loading) return <JobPageSkeleton />;
  if (error) return <div>Failed to load job</div>;
  if (!job) return <div>Job not found</div>;

  const formatedAppliedAtDate = formatDate(job?.appliedAt);

  const interviewIndicator = showInterviewIndicator(job.interviewDate);

  return (
    <div className="mx-auto p-1">
      <Button
        onClick={() => navigate(-1)}
        variant="secondary"
        size="lg"
        className="mb-4 gap-2"
      >
        <ArrowLeft />
        Back
      </Button>

      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between  rounded-2xl p-4 border">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full border flex items-center justify-center bg-muted">
            <Building2 size={36} />
          </div>

          <div>
            <h2 className="text-xl font-semibold leading-tight">
              {job.company}
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {job.companyEmail}
              <CopyButton value={job.companyEmail} />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <CreateJobStepper
            title="Edit Job"
            icon={<Pencil />}
            editing
            id={job.id}
            variant="secondary"
          />
          <DeleteJobModal id={id} />
        </div>
      </div>

      <div className="mt-6 bg-card rounded-2xl border p-5">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-b pb-4 mb-6">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <User />
            {job.role}
          </h3>

          <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium">
            <CalendarClockIcon className="stroke-[1px]" />
            {interviewIndicator.message}
            {interviewIndicator.upcoming ? (
              <span className="h-2 w-2 bg-primary rounded-full animate-ping" />
            ) : (
              <span className="h-2 w-2 bg-red-500 rounded-full animate-ping" />
            )}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                className={`h-4 w-4 ${getStatusColor(job.status)} rounded-full`}
              ></span>
              Status
            </span>
            <p className="font-semibold text-lg">{job.status}</p>
          </div>

          <div>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase size={16} />
              Job Type
            </span>
            <p className="font-semibold text-lg">{job.jobType}</p>
          </div>

          <div>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Laptop size={16} />
              Work Type
            </span>
            <p className="font-semibold text-lg">{job.workType}</p>
          </div>

          {job.interviewType && (
            <div>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClipboardList size={16} />
                Interview Type
              </span>
              <p className="font-semibold text-lg">{job.interviewType}</p>
            </div>
          )}

          {job.appliedAt && (
            <div>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarCheck size={16} />
                Applied At
              </span>
              <p className="font-semibold text-lg">{formatedAppliedAtDate}</p>
            </div>
          )}

          <div>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign size={16} />
              Salary Range
            </span>
            <NumericFormat
              className="font-semibold text-lg"
              value={job.salaryRange}
              thousandSeparator
            />
          </div>
        </div>
      </div>

      {job.feedback && (
        <div className="mt-6 bg-card border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MessageSquare />
            Feedback
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {job.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobPage;
