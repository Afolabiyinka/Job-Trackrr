import { useAnalyseResume } from "../hooks/useAnalyseResume";
import EmptyResume from "./sub-pages/EmptyResume";
import ResultsSkeleton from "./sub-pages/LoadingState";
import Results from "./sub-pages/Results";

const Resume = () => {
  const { isPending, analysis, isSuccess, isError, error } = useAnalyseResume();

  // Loading state
  if (isPending) {
    return <ResultsSkeleton />;
  }

  // Error state
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium text-red-600">Analysis Failed</h3>

          <p className="text-sm text-gray-600">
            {error?.message || "Something went wrong. Please try again."}
          </p>
        </div>

        <EmptyResume />
      </div>
    );
  }

  // Success state
  if (isSuccess && analysis) {
    return <Results />;
  }

  // Empty state
  return <EmptyResume />;
};

export default Resume;
