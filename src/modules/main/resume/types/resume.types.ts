export interface AnalysisType {
  suggestions: {
    score: number;
    success: boolean,
    message: string,
    strengths: String[];
    weaknesses: String[];
    improvements: String[];
  }
}
