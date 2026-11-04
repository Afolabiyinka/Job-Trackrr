import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableView from "./views/table-view";
import CardView from "./views/card-view";
import { LayoutGrid, LayoutList, Plus, Table } from "lucide-react";
import CreateJobStepper from "../components/create-job/stepper/CreateJob-Stepper";
import { useGetJobs } from "../hooks/useGetJobs";
import NoJobs from "./empty/NoJobs";
import ListView from "./views/list-view";
import { useState } from "react";
import { JobsPageSkeleton } from "../../MainPgeSkeleton";
import ErrorPage from "../../loading-screens/ErrorRefetch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type JobView = "card" | "table" | "list";

const VIEW_STORAGE_KEY = "jobsView";

const jobViews: {
  value: JobView;
  label: string;
  icon: React.ElementType;
  content: React.ReactNode;
}[] = [
  {
    value: "list",
    label: "List View",
    icon: LayoutList,
    content: <ListView />,
  },
  { value: "table", label: "Table View", icon: Table, content: <TableView /> },

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
    return <ErrorPage action={refetch} />;
  }

  if (loading) return <JobsPageSkeleton />;
  if (data?.data.length === 0) return <NoJobs />;

  const totalApplications = data?.pagination?.total ?? data?.data.length ?? 0;

  return (
    <div className="h-full w-full flex flex-col gap-5 p-2">
      <div className="flex justify-between md:items-center flex-col md:flex-row w-full items-start gap-3">
        <div>
          <h1 className="text-2xl font-semibold font-heading tracking-tight">
            Job Applications
          </h1>
          <p className="text-sm text-muted-foreground">
            You have {totalApplications}{" "}
            {totalApplications === 1 ? "application" : "applications"}
          </p>
        </div>
        <CreateJobStepper
          title="Add a new job"
          icon={<Plus />}
          editing={false}
        />
      </div>

      <Tabs value={currentView} onValueChange={handleViewChange}>
        <TabsList className="space-x-2 border rounded-full">
          {jobViews.map(({ value, label, icon: Icon }) => (
            <TabsTrigger key={value} value={value} className="group px-4">
              <Tooltip>
                <TooltipTrigger>
                  <Icon className="h-5 w-5 shrink-0" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
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
