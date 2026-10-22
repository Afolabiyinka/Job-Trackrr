import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  DollarSign,
  Laptop,
  MessageSquare,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/shared/lib/utils";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import DeleteJobModal from "../components/delete-job";
import InterviewBadge from "../components/interview-badge";
import JobPageSkeleton from "../components/loading-skeleton";
import { formatDate, getStatusColor } from "../libs/utils";
import { useGetJob } from "../hooks/useGetJob";
import ErrorPage from "../../loading-screens/ErrorRefetch";

const statusLabel = (status: string | null) =>
  status
    ? status.charAt(0).toUpperCase() + status.slice(1)
    : "Status not set";

const DetailItem = ({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof BriefcaseBusiness;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 py-4">
    <Icon
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
    />
    <div className="min-w-0 flex-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-1 break-words text-sm font-medium">{children}</div>
    </div>
  </div>
);

const JobPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { job, error, loading, refetch } = useGetJob({ id: id ?? "" });

  useEffect(() => {
    if (job) document.title = `${job.role} at ${job.company}`;
  }, [job]);

  if (!id) return <div>Invalid job ID</div>;
  if (loading) return <JobPageSkeleton />;
  if (error) return <ErrorPage action={refetch} />;
  if (!job) return <ErrorPage />;

  const appliedDate = formatDate(job.appliedAt);
  const interviewDate = formatDate(job.interviewDate);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-1 md:p-4">
      <div className="flex items-center justify-between gap-3">
        <Button onClick={() => navigate(-1)} variant="ghost" size="lg">
          <ArrowLeft aria-hidden="true" size={16} />
          Back to applications
        </Button>
        <div className="flex shrink-0 items-center gap-2">
          <CreateJobStepper
            title="Edit"
            icon={<Pencil aria-hidden="true" size={14} />}
            editing
            id={job.id}
            variant="secondary"
          />
          <DeleteJobModal id={id} />
        </div>
      </div>

      <header className="flex flex-col gap-5 rounded-3xl bg-muted/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex min-w-0 items-center gap-4">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-background text-2xl font-semibold"
          >
            {job.company.trim().charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h1 className="break-words font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              {job.role}
            </h1>
            <div className="mt-1 flex min-w-0 items-center gap-1 text-muted-foreground">
              <span className="truncate">{job.company}</span>
              {job.companyEmail && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="hidden truncate text-sm sm:inline">
                    {job.companyEmail}
                  </span>
                  <CopyButton value={job.companyEmail} />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          {job.status && (
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium",
                getStatusColor(job.status),
              )}
            >
              {statusLabel(job.status)}
            </span>
          )}
          {job.interviewDate && (
            <InterviewBadge
              interviewDate={job.interviewDate}
              className="rounded-full border-0 bg-background/80"
            />
          )}
        </div>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,0.8fr)] lg:gap-8">
        <div className="flex min-w-0 flex-col gap-6">
          <section
            aria-labelledby="job-details-title"
            className="rounded-2xl bg-muted/30 p-5 sm:p-7"
          >
            <h2
              id="job-details-title"
              className="font-heading text-lg font-semibold"
            >
              Role details
            </h2>
            <div className="mt-3 grid gap-x-8 sm:grid-cols-2">
              <DetailItem icon={BriefcaseBusiness} label="Job type">
                {job.jobType?.replaceAll("_", " ") ?? "Not specified"}
              </DetailItem>
              <DetailItem icon={Laptop} label="Work type">
                {job.workType ?? "Not specified"}
              </DetailItem>
              <DetailItem icon={DollarSign} label="Salary range">
                {job.salaryRange ? (
                  <NumericFormat
                    displayType="text"
                    value={job.salaryRange}
                    thousandSeparator
                  />
                ) : (
                  "Not specified"
                )}
              </DetailItem>
              {job.interviewType && (
                <DetailItem icon={ClipboardList} label="Interview type">
                  {job.interviewType === "In_Person"
                    ? "In person"
                    : job.interviewType}
                </DetailItem>
              )}
            </div>
          </section>

          {job.feedback && (
            <section
              aria-labelledby="feedback-title"
              className="rounded-2xl bg-background p-5 sm:p-7"
            >
              <div className="flex items-center gap-2">
                <MessageSquare
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
                <h2 id="feedback-title" className="font-semibold">
                  Feedback and notes
                </h2>
              </div>
              <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-foreground">
                {job.feedback}
              </p>
            </section>
          )}
        </div>

        <aside
          aria-labelledby="application-timeline-title"
          className="rounded-2xl bg-muted/40 p-5 sm:p-7"
        >
          <h2
            id="application-timeline-title"
            className="font-heading text-lg font-semibold"
          >
            Application timeline
          </h2>
          {job.appliedAt || job.interviewDate ? (
            <ol className="mt-6 space-y-6">
              {job.appliedAt && (
                <li className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-primary"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">Application submitted</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {appliedDate}
                    </p>
                  </div>
                </li>
              )}
              {job.interviewDate && (
                <li className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-primary"
                  >
                    <CalendarCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">Interview scheduled</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {interviewDate}
                      {job.interviewType &&
                        ` · ${job.interviewType === "In_Person" ? "In person" : "Virtual"}`}
                    </p>
                  </div>
                </li>
              )}
            </ol>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              Add application or interview dates to see your timeline.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
};

export default JobPage;
