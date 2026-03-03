import { Router } from "express";
import { analyseResume, deleteResume } from "../controllers/resumeController";

export const ResumeRouter = Router();
ResumeRouter.route("/").post(analyseResume);
ResumeRouter.route("/delete").delete(deleteResume);
