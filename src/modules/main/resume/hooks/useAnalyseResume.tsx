import { useMutation } from "@tanstack/react-query";
import { analyseResume } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useResume } from "../store/useResume";

export const useAnalyseResume = () => {
  const { toastError } = useToastMessage();
  const { resumeText } = useResume();

  const mutation = useMutation({
    mutationFn: analyseResume,
    onError: (err) => {
      toastError(err.message || "Something went wrong, pls try again later");
    },
  });

  function handleAnalyse() {
    if (!resumeText) return;
    mutation.mutate(resumeText);
  }

  return {
    handleAnalyse,
    isPending: mutation.isPending,
    analysis: mutation.data,
    isSuccess: mutation.isSuccess,
  };
};