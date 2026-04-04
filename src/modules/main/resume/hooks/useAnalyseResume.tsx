import { useMutation } from "@tanstack/react-query";
import { analyseResume } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { useResume } from "../store/useResume";
import { useNavigate } from "react-router-dom";

export const useAnalyseResume = () => {
  const { toastError } = useToastMessage();
  const { setAnalysis, resumeText } = useResume();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (payload: string) => analyseResume(payload),
    onSuccess: (data) => {
      setAnalysis(data.suggestions);
      navigate("/resume/results");
    },
    onError: (err) => {
      toastError(err.message || "Something went wrong, pls try again later");
    },
  });

  function handleAnalyse() {
    if (!resumeText) return;
    mutate(resumeText);
  }
  return { handleAnalyse, isPending, error };
};
