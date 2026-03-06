import { useMutation } from "@tanstack/react-query";
import { analyseResume } from "../services/request";
import useToastMessage from "@/lib/toastMsg";
import { useResume } from "../store/useResume";

export const useAnalyseResume = () => {
  const { toastError } = useToastMessage();
  const { setAnalysis, resumeText } = useResume();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (payload: string) => analyseResume(payload),
    onSuccess: (data) => {
      setAnalysis(data.suggestions);
    },
    onError: (err) => {
      toastError(err.message || "Something went wrong, pls try again later");
    },
  });

  async function handleAnalyse() {
    mutate(resumeText);
    console.log(resumeText);
  }
  return { handleAnalyse, loading: isPending, error };
};
