import { Router } from "express";
import {
  createJob,
  getAllJobs,
  updateJobDetails,
} from "../controllers/jobController";
import { authMiddleware } from "../middleware/authMiddleware";

export const JobRouter = Router();
JobRouter.route("/").get(authMiddleware, getAllJobs);
JobRouter.route("/create").post(authMiddleware, createJob);
JobRouter.route("/update").put(authMiddleware, updateJobDetails);
