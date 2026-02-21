import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

const apiKey = process.env.GEMINI_API_KEY!;
if (!apiKey) {
  throw new Error("Api key not found");
}
console.log(apiKey);
const ai = new GoogleGenAI({ apiKey: apiKey });

export async function gemini() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}
