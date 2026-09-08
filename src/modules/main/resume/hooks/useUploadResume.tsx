import { useRef, useState, type ChangeEvent } from "react";
import useToastMessage from "@/shared/lib/toastMsg";
import { useResume } from "../store/useResume";

export const useUploadResume = () => {
  const { toastError } = useToastMessage();
  const [uploadedResume, setUploadedResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const lastUploadedFile = useRef<File | null>(null);
  const { setResumeFile, reset } = useResume();

  async function handlePdfUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file === lastUploadedFile.current) return;
    lastUploadedFile.current = file;

    if (file.type !== "application/pdf") {
      toastError("Only PDF files are allowed");
      return;
    }

    try {
      setLoading(true);
      setUploadedResume(file);
      reset();
      setResumeFile(file);
    } catch (error) {
      lastUploadedFile.current = null;
      toastError("Failed to upload resume");
      console.error(error);
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  }

  return {
    handlePdfUpload,
    uploadedResume,
    loading,
    setResumeFile,
  };
};
