import ScoreCircle from "../../components/ScoreCircle";
import { useResume } from "../../store/useResume";
import { useAnalyseResume } from "../../hooks/useAnalyseResume";
import { Navigate } from "react-router-dom";
import UploadResume from "../../components/UploadResume";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle,
  Loader2,
  RefreshCcw,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Results = () => {
  const { analysis } = useResume();

  const { handleAnalyse, loading } = useAnalyseResume();
  if (!analysis && !loading) {
    return <Navigate to={`/resume`} />;
  }

  const strengths = analysis?.strengths || [];
  const weaknesses = analysis?.weaknesses || [];
  const improvements = analysis?.improvements || [];
  return (
    <div>
      <div className="p-3 flex justify-start md:justify-between items-center flex-col md:flex-row gap-3">
        <span className=" flex items-center gap-3 shadow border p-2 px-4 rounded-full">
          <ScoreCircle score={analysis?.score || 0} />
          <p className="text-2xl  tracking-tight">Resume score</p>
        </span>
        <span className="flex items-center gap-2">
          <UploadResume title="Upload a new resume" />
          <Button
            size="icon"
            variant={`outline`}
            onClick={handleAnalyse}
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="animate-spin h-6 w-6" />
            ) : (
              <RefreshCcw />
            )}
          </Button>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-1 gap-2">
        <div className="p-1 grid md:grid-cols-2 gap-10">
          {/* //Strengths */}
          <Card className="transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle />
                What You’re Doing Well{" "}
              </CardTitle>
              <CardDescription>
                Nice work — these parts of your resume are already doing well.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 ">
                {strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-base">
                    <span>.</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* //Weakness */}

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <AlertTriangle />
                What You Can Improve{" "}
              </CardTitle>
              <CardDescription>
                These are areas that could be improved to make your resume
                stronger and more effective.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-base">
                {weaknesses.map((weakness, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span>.</span>
                    {weakness}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* //improvements */}
        <Card className="transition w-full h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="text-blue-600" />
              What You Can Improve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-base">
              {improvements.map((improve, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  {improve}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
