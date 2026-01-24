import type {
  InterviewType,
  JobType,
  Status,
  WorkType,
} from "../../../types/job";

export const INTERVIEW_TYPES: InterviewType[] = ["Virtual", "In_person"];
export const STATUS_TYPES: Status[] = [
  "applied",
  "interview",
  "offer",
  "rejected",
];

export const JOB_TYPES: JobType[] = [
  "Contract",
  "Full_Time",
  "Internship",
  "Part_Time",
];

export const WORK_TYPES: WorkType[] = ["Hybrid", "On-Site", "Remote"];
