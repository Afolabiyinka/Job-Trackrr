import { useAnalyseResume } from "../hooks/useAnalyseResume";
import EmptyResume from "./sub-pages/EmptyResume";
import { Navigate } from "react-router-dom";
import ResultsSkeleton from "./sub-pages/LoadingState";

const Resume = () => {
  const { isPending, analysis, isSuccess } = useAnalyseResume();

  console.log("analysis:", analysis);
  console.log("isPending:", isPending);

  if (isPending) {
    return <ResultsSkeleton />;
  }


  if (isSuccess && analysis) {
    return <Navigate to="/resume/results" replace />;
  }

  return <EmptyResume />;
};
export default Resume;
