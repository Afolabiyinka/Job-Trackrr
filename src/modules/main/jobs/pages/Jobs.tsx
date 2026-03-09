import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableView from "./views/table-view";
import CardView from "./views/card-view";
import {
  ArrowRight,
  LayoutGrid,
  LayoutList,
  RefreshCcw,
  Table,
} from "lucide-react";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import { useGetJobs } from "../hooks/useGetJobs";
import LoadingContainer from "@/components/loader/loadingcontainer";
import NoJobs from "./error/NoJobs";
import { Button } from "@/components/ui/button";
import ListView from "./views/list-view";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [currentView, setCurrentView] = useState<"card" | "table" | "list">(
    "card",
  );

  // Load saved view from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("jobsView") as
      | "card"
      | "table"
      | "list"
      | null;
    if (stored) setCurrentView(stored);
  }, []);

  // Handle tab change
  function handleViewChange(value: string) {
    if (value === "card" || value === "table" || value === "list") {
      setCurrentView(value);
      localStorage.setItem("jobsView", value);
    }
  }

  const { jobs, error, loading, refetch } = useGetJobs();

  if (error) {
    return (
      <div className="h-screen rounded-xl w-full flex flex-col justify-center items-center border">
        <h1 className="text-3xl mb-3">Failed to get all jobs</h1>
        <Button size="lg" onClick={() => refetch()}>
          <RefreshCcw />
          Retry
        </Button>
      </div>
    );
  }

  if (loading) return <LoadingContainer />;
  if (jobs?.length === 0) return <NoJobs />;

  return (
    <div className="h-full w-full flex flex-col gap-5 p-3">
      <CreateJobStepper
        title="Add a new job"
        icon={<ArrowRight />}
        editing={false}
      />

      <Tabs value={currentView} onValueChange={handleViewChange}>
        <TabsList className="border p-0.5 ">
          <TabsTrigger value="card">
            <span className="flex items-center gap-1">
              <LayoutGrid className="h-4 w-4" />
              Card View
            </span>
          </TabsTrigger>
          <TabsTrigger value="table">
            <span className="flex items-center gap-1">
              <Table className="h-4 w-4" />
              Table View
            </span>
          </TabsTrigger>
          <TabsTrigger value="list">
            <span className="flex items-center gap-1">
              <LayoutList className="h-4 w-4" />
              List View
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="card" className="h-full">
          <CardView />
        </TabsContent>
        <TabsContent value="table" className="h-full">
          <TableView />
        </TabsContent>
        <TabsContent value="list" className="h-full">
          <ListView />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Jobs;
