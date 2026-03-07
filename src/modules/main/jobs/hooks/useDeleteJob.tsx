import { useMutation } from "@tanstack/react-query";
import { deleteJob } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useNavigate } from "react-router-dom";

export const useDeleteJob = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: () => {
      toastSuccess("Job Deleted Succesfully");
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
