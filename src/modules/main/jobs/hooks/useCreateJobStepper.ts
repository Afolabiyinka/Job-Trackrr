import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import {
   refinedJobSchema,
   type JobFormInput,
   type JobFormOutput,
} from "../libs/job.validation";
import type {
   InterviewType,
   JobType,
   Status,
   WorkType,
} from "../types/job.types";
import { useCreateJob } from "./useCreateJob";
import { useEditJobs } from "./useEditJob";
import { useGetJob } from "./useGetJob";

export type JobDraft = {
   appliedAt: Date | null;
   company: string;
   role: string;
   status: Status | null;
   interviewType: InterviewType | null;
   workType: WorkType | null;
   jobType: JobType | null;
   interviewDate: Date | null;
   companyEmail: string;
   feedback: string;
   salaryRange: number | null;
};

const initialFormData: JobDraft = {
   appliedAt: null,
   company: "",
   role: "",
   status: null,
   interviewType: null,
   workType: null,
   jobType: null,
   interviewDate: null,
   companyEmail: "",
   feedback: "",
   salaryRange: null,
};

export const useCreateJobStepper = ({
   editing,
   id,
}: {
   editing?: boolean;
   id?: number | string;
}) => {
   const [activeStep, setActiveStep] = useState(0);
   const [open, setOpen] = useState(false);
   const [formData, setFormData] = useState(initialFormData);
   const { job } = useGetJob({ id: id?.toString() ?? "" });
   const { handleCreate, createLoading } = useCreateJob();
   const { handleEdit, editLoading } = useEditJobs();
   const {
      setValue,
      formState: { errors },
   } = useForm<JobFormInput, unknown, JobFormOutput>({
      resolver: zodResolver(refinedJobSchema),
      mode: "onChange",
   });

   const updateField = <K extends keyof JobDraft>(
      field: K,
      value: JobDraft[K],
   ) => {
      setFormData((previous) => ({ ...previous, [field]: value }));
   };

   const nextStep = () => setActiveStep((previous) => Math.min(previous + 1, 3));
   const prevStep = () => setActiveStep((previous) => Math.max(previous - 1, 0));

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const {
         appliedAt,
         company,
         role,
         companyEmail,
         feedback,
         status,
         jobType,
         salaryRange,
         interviewDate,
         interviewType,
         workType,
      } = formData;

      if (editing) {
         if (!id) return;
         const success = await handleEdit(id, {
            appliedAt,
            company,
            role,
            companyEmail,
            feedback,
            status,
            jobType,
            salaryRange,
            interviewDate,
            interviewType,
            workType,
         });
         if (success) setOpen(false);
         return;
      }

      const success = await handleCreate({
         appliedAt,
         company,
         role,
         companyEmail,
         feedback,
         status,
         jobType,
         salaryRange,
         interviewDate,
         interviewType,
         workType,
      });
      if (success) {
         setFormData(initialFormData);
         setOpen(false);
      }
   }

   useEffect(() => {
      if (editing && job) {
         setFormData({
            appliedAt: job.appliedAt ? new Date(job.appliedAt) : null,
            company: job.company,
            role: job.role,
            companyEmail: job.companyEmail,
            salaryRange: job.salaryRange,
            interviewDate: job.interviewDate ? new Date(job.interviewDate) : null,
            interviewType: job.interviewType ?? null,
            status: job.status ?? null,
            workType: job.workType ?? null,
            jobType: job.jobType ?? null,
            feedback: job.feedback ?? "",
         });
      }
   }, [editing, job]);

   useEffect(() => {
      if (!editing) setFormData(initialFormData);
   }, [editing]);

   return {
      activeStep,
      open,
      setOpen,
      formData,
      updateField,
      nextStep,
      prevStep,
      handleSubmit,
      setValue,
      errors,
      isLoading: createLoading || editLoading,
   };
};
