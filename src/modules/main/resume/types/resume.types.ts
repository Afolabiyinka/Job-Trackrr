export interface AnalysisType {
  suggestions: {
        message: string,
      success: boolean,
    data: {
          score: number;

    strengths: String[];
    weaknesses: String[];
    improvements: String[];
    }
  }
}
