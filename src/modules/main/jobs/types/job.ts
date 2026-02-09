export type Status = "interview" | "applied" | "offer" | "rejected";

export type InterviewType = "Virtual" | "In_Person";

export type JobType = "Full Time" | "Part_Time" | "Contract" | "Internship";

export type WorkType = "Remote" | "Hybrid" | "On-Site";

export interface Job {
  appliedAt: Date | null;
  id?: string;
  company: string;
  role: string;
  status: Status | null;
  interviewType?: InterviewType | null;
  jobType: JobType | null;
  workType: WorkType | null;
  interviewDate: Date | null;
  companyEmail: string;
  salaryRange: number | null;
  feedback?: string | null;
}
