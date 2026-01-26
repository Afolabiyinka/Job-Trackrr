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
import { Step, Stepper } from "react-form-stepper";
import CustomInput from "../input/custom-input";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Loader2,
  Pencil,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const CreateJobStepper = ({
  title,
  icon,
  editing,
  id,
}: {
  title: string;
  icon?: React.ReactNode;
  editing?: boolean;
  id?: number | string;
}) => {
  const { jobs } = useJobs();
  const job = jobs.find((job: Job) => job.id === id);

  const [activeStep, setActiveStep] = useState(0);

  const [open, setOpen] = useState(false);

  const nextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

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
      if (!id) {
        console.error("Editing without ID");
        return;
      }

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
      setCompany(job.company);
      setRole(job.role);
      setCompanyEmail(job.companyEmail);
      // setFeedback(job.feedback);
      setSalaryRange(job.salaryRange);
      setInterviewDate(job.interviewDate ? new Date(job.interviewDate) : null);
      setInterviewType(job.interviewType ?? null);
      setStatus(job.status ?? null);
      setWorkType(job.workType ?? null);
      setJobType(job.jobType ?? null);
    }
    // Add all setter functions or disable the rule if they're stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing, job]);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) reset();
      }}
    >
      <DialogTrigger asChild>
        <span>
          <Button size={`lg`}>
            {title}
            <span className="ml-3">{icon}</span>
          </Button>
        </span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Stepper
          activeStep={activeStep}
          styleConfig={{
            activeBgColor: "#5ea500",
            completedBgColor: "#5ea500",
            inactiveBgColor: "",
          }}
        >
          <Step />
          <Step />
          <Step />
          <Step />
        </Stepper>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* //Main Step Content */}
          <div>
            {activeStep === 0 && (
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1  items-center gap-5">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link">Company name</Label>
                      <CustomInput
                        value={company}
                        onChange={(e) => setCompany(e)}
                        placeholder="E.g Google"
                        icon={<Building2 />}
                        type="text"
                      />
                    </div>
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link">Role</Label>
                      <CustomInput
                        placeholder={`Frontend Engineer`}
                        icon={<User />}
                        type="email"
                        value={role}
                        onChange={(e) => setRole(e)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          {/* Second Step */}
          <div>
            {activeStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1  items-center gap-5">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="">
                        Job Type
                      </Label>
                      <CreateDropdown
                        dropdownItems={JOB_TYPES}
                        placeholder="Select job type"
                        hasColor={false}
                        value={jobType ?? undefined}
                        onSelect={(e) => setJobType(e)}
                      />
                    </div>
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link">Work Type</Label>
                      <CreateDropdown
                        dropdownItems={WORK_TYPES}
                        placeholder="Select work type"
                        hasColor={false}
                        value={workType ?? undefined}
                        onSelect={(e) => setWorkType(e)}
                      />
                    </div>
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link">
                        Salary Expectation (Optional)
                      </Label>
                      <MoneyInput
                        value={salaryRange ?? null}
                        onChange={(value) => {
                          setSalaryRange(value);
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          {/* The third Step */}
          <div>
            {activeStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1  items-center gap-5">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="">
                        Interview Type
                      </Label>
                      <CreateDropdown
                        dropdownItems={INTERVIEW_TYPES}
                        placeholder="Select interview type"
                        hasColor={false}
                        value={interviewType ?? undefined}
                        onSelect={(e) => setInterviewType(e)}
                      />
                    </div>
                    <div className="grid flex-1 gap-2">
                      <DatePicker
                        title="Interview Date"
                        inputtedDate={interviewDate ?? undefined}
                        onSelect={(val) => val && setInterviewDate(val)}
                      />
                    </div>
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link">Company Email</Label>
                      <CustomInput
                        placeholder={`e.g. Careers@company.com`}
                        type="email"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* The 4th Step */}
          <div>
            {activeStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1  items-center gap-5">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="">
                        Status
                      </Label>
                      <CreateDropdown
                        value={status ?? undefined}
                        dropdownItems={STATUS_TYPES}
                        placeholder="Select current status"
                        hasColor={false}
                        onSelect={(e) => setStatus(e)}
                      />
                    </div>
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link">Notes</Label>
                      <Textarea
                        placeholder="Feedback or impressions"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                    </div>
                    <span className="w-full shadow rounded-lg flex justify-center items-center">
                      {loading ? (
                        <Loader2 className="animate-spin h-8 w-6" />
                      ) : (
                        <>
                          {editing ? (
                            <Button size={`lg`} className="w-full">
                              Edit Job Details
                              <Pencil />
                            </Button>
                          ) : (
                            <Button size={`lg`} className="w-full">
                              Create Job
                              <Briefcase />
                            </Button>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </form>

        <div className="flex justify-between">
          <Button onClick={prevStep} disabled={activeStep === 0} size={`lg`}>
            <ArrowLeft /> Back
          </Button>

          <Button onClick={nextStep} disabled={activeStep === 3} size={`lg`}>
            Next <ArrowRight />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobStepper;
