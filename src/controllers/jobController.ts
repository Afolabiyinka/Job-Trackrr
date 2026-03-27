import { TrackedJobs } from "../models/TrackedJobs";
import { User } from "../models/User";
import { Job } from "../types/job";
import { AuthenticatedRequest } from "../types/request/types";
import { Response, } from "express";

const createJob = async (req: AuthenticatedRequest, res: Response) => {
  const {
    appliedAt,
    company,
    companyEmail,
    interviewDate,
    jobType,
    salaryRange,
    role,
    status,
    workType,
    interviewType,
    feedback,
  } = req.body as Job;

  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Checking required fields
  if (!company || !role || !jobType || !workType || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    await TrackedJobs.create({
      appliedAt,
      company,
      companyEmail,
      interviewDate,
      jobType,
      salaryRange,
      role,
      status,
      workType,
      interviewType,
      userId,
      feedback,
    });

    return res.status(201).json({ message: "Job created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const updateJobDetails = async (req: AuthenticatedRequest, res: Response) => {
  const {
    appliedAt,
    company,
    companyEmail,
    interviewDate,
    jobType,
    salaryRange,
    role,
    status,
    workType,
    interviewType,
    feedback,
  } = req.body as Job;

  const userId = req.user?.id;
  const { id } = req.params;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  try {
    const job = await TrackedJobs.findOne({ where: { id, userId } });
    if (!job) return res.status(404).json({ message: "Job not found" });

    await job.update({
      appliedAt,
      company,
      companyEmail,
      interviewDate,
      jobType,
      salaryRange,
      role,
      status,
      workType,
      interviewType,
      feedback,
    });

    return res.status(200).json({ message: "Job updated successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteJob = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Id not provided" });
  }
  try {
    const job = await TrackedJobs.findByPk(id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    await job.destroy();
    res.status(200).json({ message: "Job Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
const getAllJobs = async (req: AuthenticatedRequest, res: Response) => {
  const id = req.user?.id;

  // get page & limit from query params
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const offset = (page - 1) * limit;

  try {
    const { rows, count } = await TrackedJobs.findAndCountAll({
      where: { userId: id },
      attributes: { exclude: ["userId"] },
      limit,
      offset,
    });

    return res.status(200).json({
      jobs: rows,
      total: count,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
const getParticularJob = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user?.id;
  const { id } = req.params;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  if (!id) return res.status(401).json({ message: "Job Id is not provided" })
  try {
    const job = await TrackedJobs.findByPk(id);
    res.status(200).json({ job });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export { createJob, getAllJobs, updateJobDetails, deleteJob, getParticularJob };
