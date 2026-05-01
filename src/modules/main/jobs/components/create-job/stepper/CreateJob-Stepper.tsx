import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import CustomInput from "../input/custom-input";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Loader2,
  Pencil,
} from "lucide-react";

import CreateDropdown from "../create-dropdown";
import { DatePicker } from "../date-picker";
import { Textarea } from "@/components/ui/textarea";
import { useSetJob } from "../../../store/useAddJob";
import {
  INTERVIEW_TYPES,
  JOB_TYPES,
  STATUS_TYPES,
  WORK_TYPES,
} from "../utils/utils";
import { useCreateJob } from "../../../hooks/useCreateJob";
import MoneyInput from "../input/salary-range";
import { useJobs } from "../../../store/useJobs";
import type { Job } from "../../../types/job";
import { useEffect } from "react";
import { useEditJobs } from "../../../hooks/useEditJob";

const STEPS = ["Basics", "Compensation", "Interview", "Status"];

const FieldGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <Label className="text-sm font-medium">{label}</Label>
    {children}
  </div>
);

const CreateJobStepper = ({
  title,
  icon,
  editing,
  id,
  variant = "default",
}: {
  title: string;
  icon?: React.ReactNode;
  editing?: boolean;
  id?: number | string;
  variant?: "default" | "secondary" | "outline" | "ghost";
}) => {
  const { jobs } = useJobs();
  const job = jobs.find((job: Job) => job.id === id);

  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const {
    company,
    role,
    companyEmail,
    feedback,
    salaryRange,
    interviewDate,
    interviewType,
    status,
    workType,
    jobType,
    appliedAt,
    setApplied,
    setCompany,
    setInterviewType,
    setRole,
    setStatus,
    setWorkType,
    setCompanyEmail,
    setJobType,
    setFeedback,
    setSalaryRange,
    setInterviewDate,
    reset,
  } = useSetJob();

  const { handleCreate, loading } = useCreateJob();
  const { handleEdit } = useEditJobs();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (editing) {
      if (!id) return;
      const success = await handleEdit({ id });
      if (success) {
        reset();
        setOpen(false);
      }
      return;
    }
    const success = await handleCreate();
    if (success) {
      reset();
      setOpen(false);
    }
  }

  useEffect(() => {
    if (editing && job) {
      setApplied(job.appliedAt ? new Date(job.appliedAt) : null);
      setCompany(job.company);
      setRole(job.role);
      setCompanyEmail(job.companyEmail);
      setSalaryRange(job.salaryRange);
      setInterviewDate(job.interviewDate ? new Date(job.interviewDate) : null);
      setInterviewType(job.interviewType ?? null);
      setStatus(job.status ?? null);
      setWorkType(job.workType ?? null);
      setJobType(job.jobType ?? null);
      setFeedback(job.feedback ?? "");
    }
  }, [editing, job]);

  useEffect(() => {
    if (!editing) reset();
  }, [job]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant={variant} className="gap-1.5">
          <span className="h-3.5 w-3.5">{icon}</span>
          {title}
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col  p-3 overflow-hidden">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
        </DialogHeader>

        {/* Step indicator */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-0">
            {STEPS.map((label, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i < activeStep
                      ? "bg-primary text-primary-foreground"
                      : i === activeStep
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {i < activeStep ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-medium tracking-wide ${i === activeStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                      }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-1 mb-5 transition-colors ${i < activeStep ? "bg-primary" : "bg-border"
                      }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4   min-h-[240px]">
            {activeStep === 0 && (
              <div className="flex flex-col gap-4">
                <FieldGroup label="Company name">
                  <CustomInput
                    value={company}
                    onChange={(e) => setCompany(e)}
                    placeholder="e.g. Google"
                    icon="Building2"
                    type="text"
                  />
                </FieldGroup>
                <FieldGroup label="Role">
                  <CustomInput
                    placeholder="e.g. Frontend Engineer"
                    icon="User"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e)}
                  />
                </FieldGroup>
                <FieldGroup label="Applied at">
                  <DatePicker
                    title=""
                    onSelect={(val) => val && setApplied(val)}
                    inputtedDate={appliedAt ?? undefined}
                  />
                </FieldGroup>
              </div>
            )}

            {activeStep === 1 && (
              <div className="flex flex-col gap-4">
                <FieldGroup label="Job type">
                  <CreateDropdown
                    dropdownItems={JOB_TYPES}
                    placeholder="Select job type"
                    hasColor={false}
                    value={jobType ?? undefined}
                    onSelect={(e) => setJobType(e)}
                  />
                </FieldGroup>
                <FieldGroup label="Work type">
                  <CreateDropdown
                    dropdownItems={WORK_TYPES}
                    placeholder="Select work type"
                    hasColor={false}
                    value={workType ?? undefined}
                    onSelect={(e) => setWorkType(e)}
                  />
                </FieldGroup>
                <FieldGroup label="Salary expectation (optional)">
                  <MoneyInput
                    value={salaryRange ?? null}
                    onChange={(value) => setSalaryRange(value)}
                  />
                </FieldGroup>
              </div>
            )}

            {activeStep === 2 && (
              <div className="flex flex-col gap-4">
                <FieldGroup label="Interview type">
                  <CreateDropdown
                    dropdownItems={INTERVIEW_TYPES}
                    placeholder="Select interview type"
                    hasColor={false}
                    value={interviewType ?? undefined}
                    onSelect={(e) => setInterviewType(e)}
                  />
                </FieldGroup>
                <FieldGroup label="Interview date">
                  <DatePicker
                    title=""
                    inputtedDate={interviewDate ?? undefined}
                    onSelect={(val) => val && setInterviewDate(val)}
                  />
                </FieldGroup>
                <FieldGroup label="Company email">
                  <CustomInput
                    icon="Mail"
                    placeholder="e.g. careers@company.com"
                    type="email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e)}
                  />
                </FieldGroup>
              </div>
            )}

            {activeStep === 3 && (
              <div className="flex flex-col gap-4">
                <FieldGroup label="Status">
                  <CreateDropdown
                    value={status ?? undefined}
                    dropdownItems={STATUS_TYPES}
                    placeholder="Select current status"
                    hasColor={false}
                    onSelect={(e) => setStatus(e)}
                  />
                </FieldGroup>
                <FieldGroup label="Notes">
                  <Textarea
                    placeholder="Feedback, impressions, or anything to remember..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="resize-none min-h-[90px]"
                  />
                </FieldGroup>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="gap-1.5 min-w-[120px]"
                >
                  {loading ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : editing ? (
                    <>
                      <Pencil size={14} /> Save changes
                    </>
                  ) : (
                    <>
                      <Briefcase size={14} /> Create job
                    </>
                  )}
                </Button>



              </div>
            )}
          </div>

          {/* Footer nav */}
          <div className="px-6 py-4 flex items-center justify-between gap-3">
            <Button
              type="button"
              onClick={prevStep}
              disabled={activeStep === 0}
              variant="outline"
              size="lg"
              className="gap-1.5"
            >
              <ArrowLeft size={14} /> Back
            </Button>

            <span className="text-xs text-muted-foreground">
              {activeStep + 1} / {STEPS.length}
            </span>


            <Button
              type="button"
              onClick={nextStep}
              size="lg"
              className="gap-1.5"
              disabled={activeStep === 3}
            >
              Next <ArrowRight size={14} />
            </Button>

          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobStepper;
