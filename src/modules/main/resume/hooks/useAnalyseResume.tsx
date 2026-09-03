import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { analyseResume } from "../services/resume.request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useResume } from "../store/useResume";

export const useAnalyseResume = () => {
  const { toastError, toastWarning } = useToastMessage();
  const { resumeFile, setAnalysis } = useResume();

  const mutation = useMutation({
    mutationFn: analyseResume,
    onError: (err) => {
      toastError(err.message || "Analysis failed. Please try again.");
    },
    onSuccess: (data) => {
      setAnalysis(data);
    },
  });

  const handleAnalyse = useCallback(() => {
    if (!resumeFile) {
      toastWarning("Please upload your resume first");
      return;
    }

    if (mutation.isPending) return;

    mutation.mutate(resumeFile);
  }, [mutation, resumeFile, toastWarning]);

  return {
    handleAnalyse,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
