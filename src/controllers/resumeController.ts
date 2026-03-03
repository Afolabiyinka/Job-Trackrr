import { Response } from "express";
import { AuthenticatedRequest } from "../types/request/types";
import { gemini } from "../utils/gemini";

const analyseResume = async (req: AuthenticatedRequest, res: Response) => {
  const userid = req.user?.id;
  const { resumeText } = req.body ?? {};

  if (!userid) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (
    !resumeText ||
    typeof resumeText !== "string" ||
    resumeText.trim() === ""
  ) {
    return res.status(400).json({ message: "Resume text is required" });
  }

  try {
    const aiSuggestions = await gemini(resumeText);
    const parsed = aiSuggestions ? JSON.parse(aiSuggestions) : null;

    if (!parsed) {
      return res.status(500).json({ message: "No suggestions returned" });
    }

    return res.status(200).json({ suggestions: parsed });
  } catch (err) {
    console.error("analyseResume error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteResume = async (req: AuthenticatedRequest, res: Response) => {};

export { analyseResume, deleteResume };
