import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, Loader2, Sparkles, UploadCloud } from "lucide-react";
import { useUploadResume } from "../hooks/useUploadResume";
import { useNavigate } from "react-router-dom";
import { useAnalyseResume } from "../hooks/useAnalyseResume";

const UploadResume = () => {
  const { handlePdfUpload, uploadedResume, loading } = useUploadResume();
  const { handleAnalyse } = useAnalyseResume();
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mx-auto" size={`lg`}>
          <UploadCloud className="mr-2 h-4 w-4" />
          Upload Resume
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Your Resume</DialogTitle>
          <DialogDescription>
            Upload a PDF file to analyze your resume and get AI-powered
            feedback.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 text-center">
          {uploadedResume ? (
            <div className="mt-3 text-lg border overflow-hidden p-4 w-full h-full rounded-md flex flex-col items-center justify-between  gap-3 mb-3">
              <span className="flex p-2 rounded-lg items-center gap-1 justify-start shadow">
                <FileText fill="white" />{" "}
                <p className="truncate w-48  text-left tracking-wide text-sm">
                  {uploadedResume.name}
                </p>
              </span>

              <span>
                {loading ? (
                  <Loader2 className="animate-spin h-8 w-8" />
                ) : (
                  <Button
                    onClick={() => {
                      navigate("/app/resume/results");
                      handleAnalyse();
                    }}
                  >
                    Analyse <Sparkles />
                  </Button>
                )}
              </span>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <UploadCloud className="h-10 w-10 mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-4">
                Drag & drop your resume here, or click to browse.
              </p>
            </div>
          )}

          <input
            id="pdf"
            type="file"
            accept="application/pdf"
            onChange={handlePdfUpload}
            className="hidden"
          />

          <Button asChild variant="secondary" size="lg">
            <label htmlFor="pdf" className="cursor-pointer">
              {uploadedResume ? "Change File" : " Choose File"}
            </label>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResume;
