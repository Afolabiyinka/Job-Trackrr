import EmptyResume from "./sub-pages/EmptyResume";
import { useResume } from "../store/useResume";
import { Navigate } from "react-router-dom";

const Resume = () => {
  const { analysis, resumeFile } = useResume();

  if (analysis && resumeFile) {
    return <Navigate to="/resume/results" />;
  }

  return <EmptyResume />;
};

export default Resume;
