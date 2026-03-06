import { useState, type ChangeEvent } from "react";
import useToastMessage from "@/lib/toastMsg";
import { extractTextFromPdf } from "../libs/utils";
import { useResume } from "../store/useResume";

export const useUploadResume = () => {
  const { toastError } = useToastMessage();
  const [uploadedResume, setUploadedResume] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const { setResumeText } = useResume();

  async function handlePdfUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toastError("Only PDF files are allowed");
      return;
    }

    try {
      setLoading(true);
      setUploadedResume(file);

      const extractedText = await extractTextFromPdf(file);
      setResumeText(extractedText);
    } catch (error) {
      toastError("Failed to extract resume text");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    handlePdfUpload,
    uploadedResume,
    loading,
  };
};
