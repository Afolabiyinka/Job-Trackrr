import EmptyResume from "./sub-pages/EmptyResume";
import { useResume } from "../store/useResume";
import { Navigate, useSearchParams } from "react-router-dom";

const Resume = () => {
  const { analysis, resumeFile } = useResume();
  const [searchParams] = useSearchParams();

  const isNewResume = searchParams.get("new") === "true";

  if (isNewResume) {
    return <EmptyResume />;
  }

  if (analysis && resumeFile) {
    return <Navigate to="/resume/results" />;
  }

  return <EmptyResume />;
};

export default Resume;
