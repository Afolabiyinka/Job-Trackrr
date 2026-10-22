export interface DashboardSummary {
  totalApplications: number;
  totalInterviews: number;
  upcomingInterviews: number;
}

export interface DashboardFollowUp {
  jobId: string;
  company: string;
  role: string;
  status: "applied";
  appliedAt: string;
}

export interface DashboardFollowUps {
  thresholdDays: number;
  total: number;
  items: DashboardFollowUp[];
}

export interface DashboardInterviewReminder {
  jobId: string;
  company: string;
  role: string;
  interviewAt: string;
  interviewType: "Virtual" | "In_Person" | null;
}

export interface DashboardInterviewReminders {
  total: number;
  items: DashboardInterviewReminder[];
}

export interface DashboardResponse {
  summary: DashboardSummary;
  followUps: DashboardFollowUps;
  interviewReminders: DashboardInterviewReminders;
}
