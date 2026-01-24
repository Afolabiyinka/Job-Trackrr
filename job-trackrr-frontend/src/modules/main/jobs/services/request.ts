import { testingEndpoint } from "@/constants/api-data";
import type { Job } from "../types/job";
import { useUser } from "../../settings/store/useUser";

const createJob = async (payload: Job) => {
  const token = useUser.getState().token;

  const res = await fetch(`${testingEndpoint}api/jobs/create`, {
    body: JSON.stringify(payload),
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const getAllJobs = async (): Promise<Job[]> => {
  const token = useUser.getState().token;
  const res = await fetch(`${testingEndpoint}api/jobs`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

export { createJob, getAllJobs };
