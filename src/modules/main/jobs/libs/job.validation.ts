import { z } from "zod";

export const JobTypeEnum = z.enum(["Full_Time", "Part_Time", "Contract", "Internship"], {
   error: "Please select a valid job type",
});

export const WorkTypeEnum = z.enum(["Remote", "Hybrid", "On-Site"], {
   error: "Please select a valid work type",
});

export const JobStatusEnum = z.enum(["interview", "applied", "offer", "rejected"], {
   error: "Please select a valid status",
});

export const InterviewTypeEnum = z.enum(["Virtual", "In_Person"], {
   error: "Please select a valid interview type",
});

export const baseJobSchema = z.object({
   company: z
      .string({ error: "Company name is required" })
      .min(1, "Company name cannot be empty")
      .max(255, "Company name is too long"),

   role: z
      .string({ error: "Role is required" })
      .min(1, "Role cannot be empty")
      .max(255, "Role name is too long"),

   jobType: JobTypeEnum,

   workType: WorkTypeEnum,

   status: JobStatusEnum,

   companyEmail: z
      .string({ error: "Company email is required" })
      .email("Please enter a valid email address")
      .optional(),

   salaryRange: z
      .number({ error: "Salary must be a number" })
      .nonnegative("Salary cannot be negative")
      .optional()
      .nullable(),

   appliedAt: z.coerce.date({ error: "Please enter a valid application date" }).optional(),

   interviewDate: z.coerce.date({ error: "Please enter a valid interview date" }).optional().nullable(),

   interviewType: InterviewTypeEnum.optional().nullable(),

   feedback: z
      .string()
      .max(1000, "Feedback must be under 1000 characters")
      .optional(),
});

export const refinedJobSchema = baseJobSchema.refine(
   (data) => {
      if (data.status === "interview") {
         return data.interviewDate && data.interviewType;
      }
      return true;
   },
   {
      message: "Interview date and type are required when status is set to Interview",
      path: ["interviewDate"],
   }
);

export const createJobSchema = z.object({
   body: refinedJobSchema,
});

export const updateJobSchema = z.object({
   params: z.object({
      id: z.string().uuid("Invalid job ID"),
   }),
   body: baseJobSchema.partial(),
});

export const jobParamsSchema = z.object({
   params: z.object({
      id: z.string().uuid("Invalid job ID"),
   }),
});

export const jobSearchSchema = z.object({
   query: z.object({
      q: z.string().trim().min(1, "Search term is required").max(100),
   }),
});

export type CreateJobInput = z.infer<typeof createJobSchema>["body"];
export type JobFormInput = z.input<typeof refinedJobSchema>;
export type JobFormOutput = z.output<typeof refinedJobSchema>;

export type UpdateJobInput = z.infer<typeof updateJobSchema>["body"];
export type JobParams = z.infer<typeof jobParamsSchema>["params"];
export type JobSearchInput = z.infer<typeof jobSearchSchema>["query"];