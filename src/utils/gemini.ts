import { GoogleGenAI } from "@google/genai";
// import { configDotenv } from "dotenv";
import { config } from "dotenv";

// configDotenv();
config();

const apiKey = process.env.GEMINI_API_KEY!;
if (!apiKey) {
  throw new Error("Api key not found");
}
console.log(apiKey);
const ai = new GoogleGenAI({ apiKey: apiKey });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
