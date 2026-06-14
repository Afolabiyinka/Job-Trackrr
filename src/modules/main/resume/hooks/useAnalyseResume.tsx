import { useMutation } from "@tanstack/react-query";
import { analyseResume } from "../services/resume.request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useResume } from "../store/useResume";

export const useAnalyseResume = () => {
  const { toastError, toastWarning } = useToastMessage();
  const { resumeText, setAnalysis } = useResume();

  const mutation = useMutation({
    mutationFn: analyseResume,
    onError: (err) => {
      toastError(err.message || "Analysis failed. Please try again.");
    },
    onSuccess: (data) => {
      setAnalysis(data);
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
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
