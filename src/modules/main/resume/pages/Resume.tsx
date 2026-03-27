import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
} from "@/components/ui/empty";
import { Upload } from "lucide-react";
import UploadResume from "../components/UploadResume";
import { useResume } from "../store/useResume";
import { Navigate } from "react-router-dom";
import { useAnalyseResume } from "../hooks/useAnalyseResume";
import LoadingContainer from "@/components/loader/loadingcontainer";

const Resume = () => {
  const { analysis } = useResume();
  const { loading } = useAnalyseResume();
  if (loading) {
    return <LoadingContainer />;
  }
  if (analysis || loading) return <Navigate to={`/resume/results`} />;
  return (
    <Empty className="h-full border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="h-16 w-16">
          <Upload aria-hidden />
        </EmptyMedia>

        {/* <EmptyTitle className="text-2xl">No Resume Uploaded</EmptyTitle> */}

        <EmptyDescription className="">
          Add your resume to get an instant feedback, an ATS score, and tips to
          help improve your chances of landing interviews.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="flex-row justify-center gap-2">
        <UploadResume title="Upload Resume" />
      </EmptyContent>
    </Empty>
  );
};

export default Resume;
