import { useMutation } from "@tanstack/react-query";
import { useSetJob } from "../store/useAddJob";
import type { Job } from "../types/job";
import useToastMessage from "@/lib/toastMsg";
import { editJob } from "../services/request";

export const useEditJobs = () => {
  const { toastError, toastSuccess } = useToastMessage();

  const {
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
    mutationFn: (payload: Job) => editJob(payload),
    onSuccess: (data) => {
      toastSuccess(data.message);
    },
    onError: (err: any) => {
      toastError(err.message || "Something went wrong");
    },
  });
  async function handleEdit({ id }: { id: number | string }): Promise<boolean> {
    try {
      await mutateAsync({
        company,
        id,
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
    handleEdit,
    loading: isPending,
  };
};
