import { create } from "zustand";
import type { InterviewType, JobType, Status, WorkType } from "../types/job";

interface Addjob {
  company: string;
  companyImg: string;
  role: string;

  status: Status | null;
  interviewType: InterviewType | null;
  workType: WorkType | null;
  jobType: JobType | null;

  interviewDate: Date | null;
  companyEmail: string;
  feedback: string;
  salaryRange: number | null;

  setCompany: (company: string) => void;
  setCompanyImg: (img: string) => void;
  setRole: (role: string) => void;
  setStatus: (status: Status | null) => void;
  setInterviewType: (interview: InterviewType | null) => void;
  setInterviewDate: (date: Date | null) => void;
  setWorkType: (wt: WorkType | null) => void;
  setCompanyEmail: (email: string) => void;
  setJobType: (jobType: JobType | null) => void;
  setFeedback: (feedback: string) => void;
  setSalaryRange: (salary: number | string | null) => void;
  reset: () => void;
}

export const useSetJob = create<Addjob>((set) => {
  const defaultState = {
    company: "",
    companyImg: "",
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

  return {
    ...defaultState,

    setCompany: (c) => set({ company: c }),
    setCompanyImg: (ci) => set({ companyImg: ci }),
    setRole: (r) => set({ role: r }),
    setStatus: (s) => set({ status: s }),
    setInterviewType: (it) => set({ interviewType: it }),
    setInterviewDate: (d) => set({ interviewDate: d ? new Date(d) : null }),
    setWorkType: (wt) => set({ workType: wt }),
    setCompanyEmail: (e) => set({ companyEmail: e }),
    setJobType: (jt) => set({ jobType: jt }),
    setFeedback: (f) => set({ feedback: f }),
    setSalaryRange: (s) =>
      set({ salaryRange: s === null || s === "" ? null : Number(s) }),

    reset: () => set({ ...defaultState }),
  };
});
