import LoadingContainer from "@/components/loader/loadingcontainer";
import { useAnalyseResume } from "../hooks/useAnalyseResume";
import { useResume } from "../store/useResume";
import EmptyResume from "./sub-pages/EmptyResume";
import { Navigate } from "react-router-dom";

const Resume = () => {
  const { analysis } = useResume();
  const { isPending } = useAnalyseResume();

  if (isPending) {
    return <LoadingContainer />;
  }

  if (analysis) {
    return <Navigate to={`/resume/results`} />;
  }

  return <EmptyResume />;
};

export default Resume;
