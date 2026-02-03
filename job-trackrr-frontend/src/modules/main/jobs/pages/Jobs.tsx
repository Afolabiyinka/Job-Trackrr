import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableView from "./views/table-view";
import CardView from "./views/card-view";
import { ArrowRight, LayoutGrid, Table } from "lucide-react";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import { useGetJobs } from "../hooks/useGetJobs";
import LoadingContainer from "@/components/loader/loadingcontainer";
import NoJobs from "./error/NoJobs";
import { useJobs } from "../store/useJobs";
import { useEffect } from "react";

const Jobs = () => {
  const { jobs, error, loading } = useGetJobs();
  const { setJobs } = useJobs();

  useEffect(() => {
    if (jobs) {
      setJobs(jobs);
    }
  }, [jobs, setJobs]);

  if (error) {
    return (
      <div className="h-screen rounded-xl w-full flex justify-center items-center border">
        <h1 className="text-3xl"> Failed to get all jobs</h1>
      </div>
    );
  }

  if (loading) {
    return <LoadingContainer />;
  }

  if (jobs?.length === 0) {
    return <NoJobs />;
  }

  return (
    <div className="h-full w-full flex flex-col gap-5 p-3">
      <div>
        <CreateJobStepper
          title="Add a new job"
          icon={<ArrowRight />}
          editing={false}
        />
      </div>
      <Tabs defaultValue={`card`}>
        <TabsList className="border">
          <TabsTrigger value="table">
            <span className="flex items-center gap-1">
              <Table className="h-4 w-4" />
              Table View
            </span>
          </TabsTrigger>
          <TabsTrigger value="card">
            <span className="flex items-center gap-1">
              <LayoutGrid className="h-4 w-4" />
              Card View
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="table" className="h-full">
          <TableView />
        </TabsContent>
        <TabsContent value="card" className="h-full">
          <CardView />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Jobs;
