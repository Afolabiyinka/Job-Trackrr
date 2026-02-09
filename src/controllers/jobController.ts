import { TrackedJobs } from "../models/TrackedJobs";
import { User } from "../models/User";
import { Job } from "../types/job";
import { AuthenticatedRequest } from "../types/request/types";
import { Response, Request } from "express";

const createJob = async (req: AuthenticatedRequest, res: Response) => {
  const {
    appliedAt,
    company,
    companyEmail,
    interviewDate: rawInterviewDate,
    jobType,
    salaryRange,
    role,
    status,
    workType,
    interviewType,
  } = req.body as Job;

  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Check required fields
  if (!company || !role || !jobType || !workType || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const interviewDate = rawInterviewDate ? new Date(rawInterviewDate) : null;

    await TrackedJobs.create({
      appliedAt,
      company,
      companyEmail: companyEmail || null,
      interviewDate,
      jobType,
      salaryRange: salaryRange || null,
      role,
      status,
      workType,
      interviewType: interviewType || null,
      userId,
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
    interviewDate: rawInterviewDate,
    jobType,
    salaryRange,
    role,
    status,
    workType,
    interviewType,
  } = req.body as Partial<Job>;

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
      interviewDate: rawInterviewDate ? new Date(rawInterviewDate) : null,
      jobType,
      salaryRange,
      role,
      status,
      workType,
      interviewType,
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
    res.status(200).json({ message: "Job Deleted Succesfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
const getAllJobs = async (req: AuthenticatedRequest, res: Response) => {
  const id = req.user?.id;

  try {
    const jobs = await TrackedJobs.findAll({
      where: { userId: id },
      attributes: { exclude: ["userId"] },
    });

    return res.status(200).json(jobs);
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
