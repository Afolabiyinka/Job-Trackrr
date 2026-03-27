import { useResume } from "../store/useResume";
import { Navigate } from "react-router-dom";
import { useAnalyseResume } from "../hooks/useAnalyseResume";
import LoadingContainer from "@/components/loader/loadingcontainer";
import EmptyResume from "./sub-pages/EmptyResume";

const Resume = () => {
  const { analysis } = useResume();
  const { loading } = useAnalyseResume();
  if (loading) {
    return <LoadingContainer />;
  }
  if (analysis || loading) return <Navigate to={`/resume/results`} />;
  return <EmptyResume />;
};

export default Resume;
