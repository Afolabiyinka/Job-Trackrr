import { useMutation } from "@tanstack/react-query";
import type { Job } from "../types/job";
import useToastMessage from "@/shared/lib/toastMsg";
import { editJob } from "../services/request";
import { queryClient } from "@/shared/constants/queryClient";
import { getErrorMessage } from "@/shared/lib/errorMsg";


export const useEditJobs = () => {
  const { toastError, toastSuccess } = useToastMessage();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ id, payload }: { id: number | string; payload: Job }) =>
      editJob(payload, id),

    onSuccess: (data) => {
      toastSuccess(data.message);

      queryClient.invalidateQueries({
        queryKey: ["job"],
      });
    },

    onError: (err) => {
      toastError(getErrorMessage(err));
    },
  });

  const handleEdit = async (
    id: number | string,
    payload: Job
  ): Promise<boolean> => {
    try {
      await mutateAsync({ id, payload });
      return true;
    } catch {
      return false;
    }
  };

  return {
    handleEdit,
    editLoading: isPending,
  };
};