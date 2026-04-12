import { useMutation } from "@tanstack/react-query";
import type { Job } from "../types/job";
import { createJob } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useSetJob } from "../store/useAddJob";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/shared/constants/queryClient";

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
  const hasOnboarded = localStorage.getItem("onboarded") === "true";

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: Job) => createJob(payload),
    onSuccess: (data) => {
      toastSuccess(data.message);
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });

      !hasOnboarded ? navigate("/jobs") : navigate("/dashboard");
    },
    onError: (err) => {
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
      console.error(err);
      return false;
    }
  }

  return {
    handleCreate,
    loading: isPending,
  };
};
