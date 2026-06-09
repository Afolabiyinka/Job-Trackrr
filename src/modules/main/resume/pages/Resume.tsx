import { useAnalyseResume } from "../hooks/useAnalyseResume";
import EmptyResume from "./sub-pages/EmptyResume";
import ResultsSkeleton from "./sub-pages/LoadingState";
import Results from "./sub-pages/Results";

const Resume = () => {
  const { isPending, isSuccess } = useAnalyseResume();

  // Loading state
  if (isPending) {
    return <ResultsSkeleton />;
  }

  if (isSuccess) {
    return <Results />;
  }

  // Empty state
  return <EmptyResume />;
};

export default Resume;
