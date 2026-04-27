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
import { NumericFormat } from "react-number-format";
import { useGetJob } from "../hooks/useGetJob";
import JobPageSkeleton from "../components/loading-skeleton";
import DeleteJobModal from "../components/delete-job";

const DetailItem = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
      {icon}
      {label}
    </span>
    <div className="text-base font-semibold">{children}</div>
  </div>
);

const JobPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Invalid job ID</div>;

  const navigate = useNavigate();
  const { job, error, loading } = useGetJob({ id });

  if (job) document.title = `${job.role} at ${job.company}`;
  if (loading) return <JobPageSkeleton />;
  if (error) return <div>Failed to load job</div>;
  if (!job) return <div>Job not found</div>;

  const formatedAppliedAtDate = formatDate(job?.appliedAt);
  const interviewIndicator = showInterviewIndicator(job.interviewDate);

  return (
    <div className="mx-auto  p-4 space-y-4">

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          size="lg"
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        <div className="flex gap-2">
          <CreateJobStepper
            title="Edit"
            icon={<Pencil size={14} />}
            editing
            id={job.id}
          />
          <DeleteJobModal id={id} />
        </div>
      </div>

      {/* Company header */}
      <div className="  rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="h-14 w-14 shrink-0 rounded-full  bg-muted flex items-center justify-center">
            <Building2 size={28} className="text-muted-foreground" />
          </div>
          <div className="min-w-0">

            <h2 className="text-xl font-bold leading-tight truncate">
              {job.company}
            </h2>
            {job.companyEmail && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                <span className="truncate">{job.companyEmail}</span>
                <CopyButton value={job.companyEmail} />
              </div>
            )}
          </div>
        </div>

        {/* Interview badge */}
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full  text-sm font-medium shrink-0 ${interviewIndicator.upcoming
            ? "border-primary/30 text-primary bg-primary/5"
            : "border-muted text-muted-foreground bg-muted/40"
            }`}
        >
          <CalendarClockIcon size={14} className="stroke-[1.5px]" />
          {interviewIndicator.message}
          <span
            className={`h-1.5 w-1.5 rounded-full animate-ping ${interviewIndicator.upcoming ? "bg-primary" : "bg-red-500"
              }`}
          />
        </div>
      </div>

      {/* Role + details */}
      <div className="  rounded-2xl divide-y">
        {/* Role header */}
        <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center shrink-0">
              <User size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Role
              </p>
              <h3 className="text-2xl font-bold leading-tight">{job.role}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className={`h-2.5 w-2.5 rounded-full ${getStatusColor(job.status)}`} />
            <span className="text-sm font-semibold">{job.status}</span>
          </div>
        </div>

        {/* Detail grid */}
        <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
          <DetailItem icon={<Briefcase size={13} />} label="Job type">
            {job.jobType}
          </DetailItem>

          <DetailItem icon={<Laptop size={13} />} label="Work type">
            {job.workType}
          </DetailItem>

          <DetailItem icon={<DollarSign size={13} />} label="Salary range">
            <NumericFormat
              displayType="text"
              value={job.salaryRange}
              thousandSeparator
              renderText={(v) => <span>{v}</span>}
            />
          </DetailItem>

          {job.interviewType && (
            <DetailItem icon={<ClipboardList size={13} />} label="Interview type">
              {job.interviewType}
            </DetailItem>
          )}

          {job.appliedAt && (
            <DetailItem icon={<CalendarCheck size={13} />} label="Applied">
              {formatedAppliedAtDate}
            </DetailItem>
          )}
        </div>
      </div>

      {/* Feedback */}
      {job.feedback && (
        <div className="  rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center">
              <MessageSquare size={14} className="text-muted-foreground" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Feedback
            </h3>
          </div>
          <p className="text-base leading-relaxed text-foreground">
            {job.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobPage;