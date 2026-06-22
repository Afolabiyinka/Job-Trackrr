import type { Job, JobType, PaginatedJobs } from "../types/job.types";
import { apiClient } from "@/shared/api/axios-config";
import type { Response } from "@/shared/types/shared.types";


const createJob = async (payload: Job) => {
  try {
    const res = await apiClient.post<Response>("/jobs", payload)
    return res.data
  }
  catch (err) {
    throw new Error()
  }
}


const editJob = async (payload: Partial<Job>, id: number | string) => {
  try {
    const res = await apiClient.put<Response>(`/jobs${id}`, payload)
    return res.data
  }
  catch (err) {
    throw new Error();
  }
}


const getAllJobs = async ({
  page = 1,
}: {
  page?: number;
}) => {
  try {
    const res = await apiClient.get<PaginatedJobs>(`/jobs?page=${page}`)
    return res.data
  } catch (err) {
    throw new Error()
  }
}

type ParticulatJobType = {
  job: Job
}

const getParticularJob = async (id: string) => {
  try {
    const res = await apiClient.get<ParticulatJobType>(`/jobs/${id}`);
    return res.data
  } catch (err) {
    throw err;
  }
};

const deleteJob = async (id: string) => {
  try {
    const res = await apiClient.delete<Response>(`/jobs/${id}`);
    return res;
  } catch (err) {
    throw new Error();
  }
};

export { createJob, getAllJobs, editJob, deleteJob, getParticularJob };
