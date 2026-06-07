import { useMutation } from "@tanstack/react-query";
import { analyseResume } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useResume } from "../store/useResume";

export const useAnalyseResume = () => {
  const { toastError, toastWarning } = useToastMessage();
  const { resumeText } = useResume();

  const mutation = useMutation({
    mutationFn: analyseResume,
    onError: (err) => {
      toastError(err.message || "Analysis failed. Please try again.");
    },
  });

  function handleAnalyse() {
    if (!resumeText?.trim()) {
      toastWarning("Please upload or paste your resume first");
      return;
    }

    mutation.mutate(resumeText);
  }

  return {
    handleAnalyse,
    isPending: mutation.isPending,
    analysis: mutation.data?.suggestions,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
