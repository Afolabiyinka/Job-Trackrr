import { prodEndpoint } from "@/constants/api-data";
import axios from "axios";

async function analyseResume(resumeText: string) {
  try {
    const res = await axios.post(
      `${prodEndpoint}api/resume`,
      { resumeText },
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
}

export { analyseResume };
