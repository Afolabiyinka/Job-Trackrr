import { useMutation } from "@tanstack/react-query";
import { deleteJob } from "../services/job.request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/shared/api/queryClient";

export const useDeleteJob = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: () => {
      toastSuccess("Job Deleted Succesfully");

      queryClient.invalidateQueries({
        queryKey: ["job"],
      });
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
      navigate(-1);
    },
    onError: (err: any) => {
      toastError(err.response?.data?.message ?? "Something went wrong");
    },
  });
  function handleDelete(id: string) {
    mutate(id);
  }
  return { handleDelete, loading: isPending };
};
