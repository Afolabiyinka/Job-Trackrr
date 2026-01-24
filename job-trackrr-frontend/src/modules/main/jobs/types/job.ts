export type Status = "interview" | "applied" | "offer" | "rejected";

export type InterviewType = "Virtual" | "In_person";

export type JobType = "Full_Time" | "Part_Time" | "Contract" | "Internship";

export type WorkType = "Remote" | "Hybrid" | "On-Site";

export interface Job {
  id?: number | string;
  company: string;
  role: string;
  appliedAt?: Date | string;
  status: Status;
  interviewType: InterviewType;
  jobType: JobType;
  workType: WorkType;
  interviewDate: Date;
  companyEmail: string;
  feedback: string;
  salaryRange: number | null;
}
