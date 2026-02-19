import { type Job } from "../types/job";

const statuses = ["interview", "applied", "offer", "rejected"] as const;
const interviewTypes = ["Virtual", "In_Person"] as const;
const jobTypes = ["Full Time", "Part_Time", "Contract", "Internship"] as const;
const workTypes = ["Remote", "Hybrid", "On-Site"] as const;

export const mockJobs: Job[] = Array.from({ length: 10 }, (_, i) => {
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomInterviewType =
    interviewTypes[Math.floor(Math.random() * interviewTypes.length)];
  const randomJobType = jobTypes[Math.floor(Math.random() * jobTypes.length)];
  const randomWorkType =
    workTypes[Math.floor(Math.random() * workTypes.length)];

  return {
    id: `job-${i + 1}`,
    company: `Company ${i + 1}`,
    role: `Frontend Developer ${i + 1}`,
    status: randomStatus,
    interviewType: randomStatus === "interview" ? randomInterviewType : null,
    jobType: randomJobType,
    workType: randomWorkType,
    appliedAt: new Date(2025, 0, (i % 28) + 1),
    interviewDate:
      randomStatus === "interview" ? new Date(2025, 1, (i % 28) + 1) : null,
    companyEmail: `hr${i + 1}@company${i + 1}.com`,
    salaryRange: 50000 + i * 1000,
    feedback:
      randomStatus === "rejected"
        ? "Unfortunately, we decided to move forward with other candidates."
        : null,
  };
});
