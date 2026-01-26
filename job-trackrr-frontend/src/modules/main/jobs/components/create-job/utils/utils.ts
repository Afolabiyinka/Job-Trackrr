import type {
  InterviewType,
  JobType,
  Status,
  WorkType,
} from "../../../types/job";

export const INTERVIEW_TYPES: InterviewType[] = ["Virtual", "In_Person"];
export const STATUS_TYPES: Status[] = [
  "applied",
  "interview",
  "offer",
  "rejected",
];

export const JOB_TYPES: JobType[] = [
  "Contract",
  "Internship",
  "Part_Time",
  "Full Time",
];

export const WORK_TYPES: WorkType[] = ["Hybrid", "On-Site", "Remote"];
