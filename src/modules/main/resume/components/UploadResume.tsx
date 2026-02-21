import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadCloud } from "lucide-react";

const UploadResume = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mx-auto">
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

        <div className="mt-6 flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 text-center">
          <UploadCloud className="h-10 w-10 mb-4 text-muted-foreground" />

          <p className="text-sm text-muted-foreground mb-4">
            Drag & drop your resume here, or click to browse.
          </p>

          <Button variant="secondary" size={`lg`}>
            Choose File
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResume;
