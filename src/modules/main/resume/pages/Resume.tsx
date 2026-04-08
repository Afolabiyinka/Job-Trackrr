import { useAnalyseResume } from "../hooks/useAnalyseResume";
import { useResume } from "../store/useResume";
import EmptyResume from "./sub-pages/EmptyResume";
import { Navigate } from "react-router-dom";
import ResultsSkeleton from "./sub-pages/LoadingState";

const Resume = () => {
  const { analysis } = useResume();
  const { isPending } = useAnalyseResume();

  if (isPending) {
    return <ResultsSkeleton />;
  }

  if (analysis) {
    return <Navigate to={`/resume/results`} />;
  }

  return <EmptyResume />;
};

export default Resume;
