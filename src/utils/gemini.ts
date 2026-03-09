import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

const apiKey = process.env.GEMINI_API_KEY!;
if (!apiKey) {
  throw new Error("Api key not found");
}

const ai = new GoogleGenAI({ apiKey });

export async function gemini(content: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: content,
    config: {
      systemInstruction: `
You are a professional resume analyzer.

Analyze the resume text I send.

Return the output as a proper JSON object (not a string) with the following structure:

{
  "score": number, 
  "strengths": [ ... ],
  "weaknesses": [ ... ],
  "improvements": [ ... ]
}

Rules:
- "score" must be a number from 0 to 100 representing the overall resume quality.
- Strengths should list the good parts of the resume.
- Weaknesses should list problems or missing elements.
- Improvements should give actionable suggestions.

Do not include any extra text, greetings, or explanations.
Return ONLY valid JSON.
`,
    },
  });

  return response.text;
}
