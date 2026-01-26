import { testingEndpoint } from "@/constants/api-data";
import type { Job } from "../types/job";

const createJob = async (payload: Job) => {
  const res = await fetch(`${testingEndpoint}api/jobs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) {
    window.location.href = "/auth/login";
    throw new Error(data.message);
  }

  return data;
};

const editJob = async (payload: Partial<Job>, id: number | string) => {
  const res = await fetch(`${testingEndpoint}api/jobs/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) {
    window.location.href = "/auth/login";
    throw new Error(data.message);
  }

  return data;
};

const getAllJobs = async (): Promise<Job[]> => {
  const res = await fetch(`${testingEndpoint}api/jobs`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ✅ send the HttpOnly cookie
  });

  const data = await res.json();
  if (!res.ok) {
    window.location.href = "/auth/login";
    throw new Error(data.message);
  }

  return data;
};

export { createJob, getAllJobs, editJob };
