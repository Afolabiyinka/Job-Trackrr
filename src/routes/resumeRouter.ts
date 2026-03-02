import { Router } from "express";
import { analyseResume } from "../controllers/resumeController";

export const ResumeRouter = Router();
ResumeRouter.route("/").post(analyseResume);
