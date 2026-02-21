import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getParticularJob,
  updateJobDetails,
} from "../controllers/jobController";

export const JobRouter = Router();
JobRouter.route("/").get(getAllJobs);
JobRouter.route("/:id").get(getParticularJob);
JobRouter.route("/create").post(createJob);
JobRouter.route("/update/:id").put(updateJobDetails);
JobRouter.route("/delete").delete(deleteJob);
// JobRouter.route("/resume").post();
