import { useMutation } from "@tanstack/react-query";
import { deleteJob } from "../services/job.request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/shared/api/queryClient";
import { queryKeys } from "@/shared/queryKeys";

export const useDeleteJob = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: () => {
      toastSuccess("Job Deleted Succesfully");

      queryClient.invalidateQueries({
        queryKey: queryKeys.job.all,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.jobs.all,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard,
      });
      navigate(-1);
    },
    onError: (error) => {
      toastError(
        error instanceof Error ? error.message : "Something went wrong",
      );
    },
  });
  function handleDelete(id: string) {
    mutate(id);
  }
  return { handleDelete, loading: isPending };
};
