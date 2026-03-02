import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db";
import { syncModels } from "./models";
import { AuthRouter } from "./routes/authRouter";
import { JobRouter } from "./routes/jobRouter";
import { authMiddleware } from "./middleware/authMiddleware";
import { sendEmail } from "./config/email";
import { ResumeRouter } from "./routes/resumeRouter";

configDotenv();
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS setup for cookies
app.use(
  cors({
    origin: ["http://localhost:4000", "https://job-trackrr.vercel.app"],
    credentials: true,
  }),
);

// Database
connectDb();
syncModels();

// Routes
app.use("/api/auth", AuthRouter);
app.use("/api/jobs", authMiddleware, JobRouter);
app.use("/api/resume", authMiddleware, ResumeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
