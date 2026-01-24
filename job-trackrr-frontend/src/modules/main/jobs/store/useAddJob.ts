import { create } from "zustand";
import type { InterviewType, JobType, Status, WorkType } from "../types/job";

interface Addjob {
  company: string;
  companyImg: string;
  role: string;
  status: Status;
  interviewType: InterviewType;
  interviewDate: Date;
  workType: WorkType;
  companyEmail: string;
  jobType: JobType;
  feedback: string;
  salaryRange: number | null;

  setCompany: (company: string) => void;
  setCompanyImg: (img: string) => void;
  setRole: (role: string) => void;
  setStatus: (status: Status) => void;
  setInterviewType: (interview: InterviewType) => void;
  setInterviewDate: (date: Date) => void;
  setWorkType: (wt: WorkType) => void;
  setCompanyEmail: (email: string) => void;
  setJobType: (jobType: JobType) => void;
  setFeedback: (feedback: string) => void;
  setSalaryRange: (salary: number | string | null) => void;
  reset: () => void;
}

export const useSetJob = create<Addjob>((set) => {
  // default state object
  const defaultState = {
    company: "",
    companyImg: "",
    role: "",
    status: "applied" as Status,
    interviewType: "Virtual" as InterviewType,
    interviewDate: new Date(),
    workType: "Remote" as WorkType,
    companyEmail: "",
    jobType: "Full_Time" as JobType,
    feedback: "",
    salaryRange: null,
  };

  return {
    ...defaultState,

    setCompany: (c) => set({ company: c }),
    setCompanyImg: (ci) => set({ companyImg: ci }),
    setRole: (r) => set({ role: r }),
    setStatus: (s) => set({ status: s }),
    setInterviewType: (it) => set({ interviewType: it }),
    setInterviewDate: (d: Date | undefined) =>
      set({ interviewDate: d ? new Date(d) : new Date() }),
    setWorkType: (wt) => set({ workType: wt }),
    setCompanyEmail: (e) => set({ companyEmail: e }),
    setJobType: (jt) => set({ jobType: jt }),
    setFeedback: (f) => set({ feedback: f }),
    setSalaryRange: (s) =>
      set({ salaryRange: s === null || s === "" ? null : Number(s) }),

    // reset function
    reset: () => set({ ...defaultState }),
  };
});
