import { prodEndpoint } from "@/shared/constants/api-data";
import axios from "axios";
import type { Job } from "../types/job";

const createJob = async (payload: Job) => {
  const res = await fetch(`${prodEndpoint}api/jobs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const editJob = async (payload: Partial<Job>, id: number | string) => {
  const res = await fetch(`${prodEndpoint}api/jobs/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

type PaginatedJobs = {
  jobs: Job[];
  total: number;
  currentPage: number;
  totalPages: number;
};

const getAllJobs = async ({
  page = 1,
}: {
  page?: number;
}): Promise<PaginatedJobs> => {
  const res = await fetch(`${prodEndpoint}api/jobs?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const getParticularJob = async (id: string): Promise<Job> => {
  try {
    const res: any = await axios.get(`${prodEndpoint}api/jobs/${id}`, {
      withCredentials: true,
    });
    return res.data.job;
  } catch (err) {
    throw new Error();
  }
};
const deleteJob = async (id: string) => {
  try {
    const res = await axios.delete(`${prodEndpoint}api/jobs/delete`, {
      withCredentials: true,
      data: { id },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export { createJob, getAllJobs, editJob, deleteJob, getParticularJob };
