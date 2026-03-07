import { useMutation } from "@tanstack/react-query";
import type { Job } from "../types/job";
import { createJob } from "../services/request";
import useToastMessage from "@/lib/toastMsg";
import { useSetJob } from "../store/useAddJob";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/constants/queryClient";

export const useCreateJob = () => {
  const { toastError, toastSuccess } = useToastMessage();
  const navigate = useNavigate();

  const {
    appliedAt,
    company,
    role,
    companyEmail,
    feedback,
    status,
    jobType,
    salaryRange,
    interviewDate,
    interviewType,
    workType,
  } = useSetJob();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: Job) => createJob(payload),
    onSuccess: (data) => {
      toastSuccess(data.message);
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });

      navigate("/app/jobs");
    },
    onError: (err: any) => {
      toastError(err.message || "Something went wrong");
    },
  });

  async function handleCreate(): Promise<boolean> {
    try {
      await mutateAsync({
        appliedAt,
        company,
        role,
        companyEmail,
        feedback,
        status,
        jobType,
        salaryRange,
        interviewDate,
        interviewType,
        workType,
      });

      return true;
    } catch (err) {
      return false;
    }
  }

  return {
    handleCreate,
    loading: isPending,
  };
};
