import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db";
import { syncModels } from "./models";
import { AuthRouter } from "./routes/authRouter";
import { JobRouter } from "./routes/jobRouter";

configDotenv();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

//Database Connections
connectDb();
syncModels();

//Routing

app.use("/api/auth", AuthRouter);
app.use("/api/jobs", JobRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
