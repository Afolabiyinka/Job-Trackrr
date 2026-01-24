import { Router } from "express";
import {
  createJob,
  getAllJobs,
  getParticularJob,
} from "../controllers/jobController";
import { authMiddleware } from "../middleware/authMiddleware";

export const JobRouter = Router();
JobRouter.route("/").get(authMiddleware, getAllJobs);
JobRouter.route("/create").post(authMiddleware, createJob);
JobRouter.route("/job").put(authMiddleware, getParticularJob);
