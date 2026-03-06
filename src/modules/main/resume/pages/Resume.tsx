import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Upload } from "lucide-react";
import UploadResume from "../components/UploadResume";
import { useResume } from "../store/useResume";
import { Navigate } from "react-router-dom";

const Resume = () => {
  const { analysis } = useResume();
  if (analysis) return <Navigate to={`/app/resume/results`} />;
  return (
    <Empty className="h-full border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="h-16 w-16">
          <Upload aria-hidden />
        </EmptyMedia>

        <EmptyTitle className="text-2xl">No Resume Uploaded</EmptyTitle>

        <EmptyDescription className="">
          Upload your resume to get instant feedback, ATS score, and improvement
          suggestions tailored to your target role.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="flex-row justify-center gap-2">
        <UploadResume />
      </EmptyContent>
    </Empty>
  );
};

export default Resume;
