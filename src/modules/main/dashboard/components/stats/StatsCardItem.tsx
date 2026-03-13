import React from "react";
import { useGetJobs } from "@/modules/main/jobs/hooks/useGetJobs";

interface Props {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const StatsCardItem = ({ value, label, icon }: Props) => {
  const { loading } = useGetJobs();

  return (
    <div className="border rounded-xl h-full overflow-hidden">
      {loading ? (
        <div className="h-full w-full p-2 animate-pulse flex justify-between items-center">
          <div className="flex items-center gap-3 mb-3 h-">
            <div className="h-6 w-6 bg-muted rounded-full"></div>
            <div className="h-3 w-52 bg-muted rounded"></div>
          </div>
          <div className="h-12 w-12 bg-muted rounded-lg"></div>
        </div>
      ) : (
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">{value}</h1>
            <p className="text-lg font-medium">{label}</p>
          </div>
          <div className="bg-muted flex justify-center items-center p-2 rounded-lg">
            {icon}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsCardItem;
