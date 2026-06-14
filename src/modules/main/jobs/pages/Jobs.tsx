import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableView from "./views/table-view";
import CardView from "./views/card-view";
import { LayoutGrid, LayoutList, Plus, RefreshCcw, Table } from "lucide-react";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import { useGetJobs } from "../hooks/useGetJobs";
import LoadingContainer from "@/components/loader/loadingcontainer";
import NoJobs from "./empty/NoJobs";
import { Button } from "@/components/ui/button";
import ListView from "./views/list-view";
import { useState } from "react";

type JobView = "card" | "table" | "list";

const VIEW_STORAGE_KEY = "jobsView";

const jobViews: {
  value: JobView;
  label: string;
  icon: React.ElementType;
  content: React.ReactNode;
}[] = [
  { value: "table", label: "Table View", icon: Table, content: <TableView /> },
  {
    value: "list",
    label: "List View",
    icon: LayoutList,
    content: <ListView />,
  },
  {
    value: "card",
    label: "Card View",
    icon: LayoutGrid,
    content: <CardView />,
  },
];

const Jobs = () => {
  const [currentView, setCurrentView] = useState<JobView>(() => {
    const stored = localStorage.getItem(VIEW_STORAGE_KEY) as JobView | null;
    return stored ?? "list";
  });

  function handleViewChange(value: string) {
    const view = value as JobView;
    setCurrentView(view);
    localStorage.setItem(VIEW_STORAGE_KEY, view);
  }

  const { data, error, loading, refetch } = useGetJobs();

  if (error) {
    return (
      <div className="h-full rounded-xl w-full flex flex-col gap-2 justify-center items-center text-center">
        <h1 className="text-3xl font-extrabold tracking-wider">
          Failed to get all jobs
        </h1>
        <p className="text-xl">Something went wrong</p>
        <Button size="lg" onClick={() => refetch()}>
          <RefreshCcw />
          Retry
        </Button>
      </div>
    );
  }

  if (loading) return <LoadingContainer />;
  if (data?.data.length === 0) return <NoJobs />;

  return (
    <div className="h-full w-full flex flex-col gap-5 p-2">
      <div className="flex justify-between md:items-center flex-col md:flex-row w-full items-start gap-3">
        <h1 className="text-2xl">Job Applications</h1>
        <CreateJobStepper
          title="Add a new job"
          icon={<Plus />}
          editing={false}
        />
      </div>

      <Tabs value={currentView} onValueChange={handleViewChange}>
        <TabsList className="space-x-4">
          {jobViews.map(({ value, label, icon: Icon }) => (
            <TabsTrigger key={value} value={value} className="group">
              <Icon className="h-4 w-4 shrink-0" />
              <span
                className="
      max-w-0 overflow-hidden opacity-0 whitespace-nowrap
      transition-all duration-300 ease-in-out
      group-data-[state=active]:max-w-24 group-data-[state=active]:opacity-100 group-data-[state=active]:ml-1.5
      md:max-w-none md:opacity-100 md:ml-1.5
    "
              >
                {label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {jobViews.map(({ value, content }) => (
          <TabsContent key={value} value={value} className="h-full">
            {content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Jobs;
