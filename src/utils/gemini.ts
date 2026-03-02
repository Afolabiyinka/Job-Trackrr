import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

const apiKey = process.env.GEMINI_API_KEY!;
if (!apiKey) {
  throw new Error("Api key not found");
}
console.log(apiKey);
const ai = new GoogleGenAI({ apiKey: apiKey });

export async function gemini(content: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `${content}`,
    config: {
      systemInstruction: `
You are a professional resume analyzer.
Analyze the resume text I send.
Return the output as a proper JSON object (not a string) with the following keys:
{
  "strengths": [ ... ],
  "weaknesses": [ ... ],
  "improvements": [ ... ]
}
Do not include any extra text, greetings, or explanations.
The response must be valid JSON.
`,
    },
  });

  return response.text;
}
