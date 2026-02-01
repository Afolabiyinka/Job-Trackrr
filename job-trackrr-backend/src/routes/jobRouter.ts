import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getParticularJob,
  updateJobDetails,
} from "../controllers/jobController";
import { authMiddleware } from "../middleware/authMiddleware";

export const JobRouter = Router();
JobRouter.route("/").get(authMiddleware, getAllJobs);
JobRouter.route("/:id").get(authMiddleware, getParticularJob);
JobRouter.route("/create").post(authMiddleware, createJob);
JobRouter.route("/update/:id").put(authMiddleware, updateJobDetails);
JobRouter.route("/delete").delete(authMiddleware, deleteJob);
