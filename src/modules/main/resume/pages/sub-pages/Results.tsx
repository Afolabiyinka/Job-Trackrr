import { useAnalyseResume } from "../../hooks/useAnalyseResume";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useResume } from "../../store/useResume";
import {
  CheckCircle,
  AlertTriangle,
  Wrench,
  RefreshCcw,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";
import LoadingContainer from "@/components/loader/loadingcontainer";
import UploadResume from "../../components/UploadResume";

const Results = () => {
  const { error, loading, handleAnalyse } = useAnalyseResume();
  const { analysis } = useResume();

  if (loading) {
    return <LoadingContainer />;
  }

  if (error) return <div>Something went wrong</div>;

  if (!analysis && !loading) {
    return <Navigate to={`/app/resume`} replace />;
  }

  const strengths = analysis?.strengths || [];
  const weaknesses = analysis?.weaknesses || [];
  const improvements = analysis?.improvements || [];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 space-y-8">
      <span className="flex flex-col md:flex-row shadow p-4 justify-between rounded-xl">
        <h2 className="text-3xl font-bold text-center">
          Resume Analysis Results
        </h2>
        <span className="flex items-center gap-2">
          <UploadResume title="Upload a new resume" />
          <Button
            size="icon"
            onClick={handleAnalyse}
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading && <Loader2 className="animate-spin h-6 w-6" />}
            {!loading && <RefreshCcw />}
          </Button>
        </span>
      </span>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Strengths */}
        <Card className="border-green-200 hover:shadow-lg transition">
          <CardHeader className="flex flex-row items-center gap-2">
            <CheckCircle className="text-green-600" />
            <CardTitle>Strengths</CardTitle>
            <CardDescription>Where your resume stands</CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4 text-base">
              {strengths.map((strength, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500">•</span>
                  {strength}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Weaknesses */}
        <Card className="border-yellow-200 hover:shadow-lg transition">
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertTriangle className="text-yellow-600" />
            <CardTitle>Weaknesses</CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4 text-base">
              {weaknesses.map((weakness, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-yellow-500">•</span>
                  {weakness}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Improvements */}
        <Card className="border-blue-200 hover:shadow-lg transition">
          <CardHeader className="flex flex-row items-center gap-2">
            <Wrench className="text-blue-600" />
            <CardTitle>Improvements</CardTitle>
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
