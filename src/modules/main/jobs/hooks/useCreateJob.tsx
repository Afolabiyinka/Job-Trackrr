import { useMutation } from "@tanstack/react-query";
import type { Job } from "../types/job";
import { createJob } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/shared/constants/queryClient";
import { getErrorMessage } from "@/shared/lib/errorMsg";
import { useUser } from "../../settings/store/useUser";

export const useCreateJob = () => {
  const { toastError, toastSuccess } = useToastMessage();
  const navigate = useNavigate();
  const { user } = useUser()

  const hasOnboarded = user?.onboarded;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: Job) => createJob(payload),

    onSuccess: (data) => {
      toastSuccess(data.message);

      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });

      navigate(hasOnboarded ? "/dashboard" : "/jobs");
    },

    onError: (err) => {
      toastError(getErrorMessage(err));
    },
  });

  const handleCreate = async (payload: Job): Promise<boolean> => {
    try {
      await mutateAsync(payload);
      return true;
    } catch {
      return false;
    }
  };

  return {
    handleCreate,
    createLoading: isPending,
  };
};
