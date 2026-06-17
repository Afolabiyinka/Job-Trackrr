import React from "react";

interface Props {
  value: number;
  label: string;
  icon: React.ReactNode;
  loading?: boolean;
}

const StatsCardItem = ({ value, label, icon, loading }: Props) => {
  return (
    <div className="border rounded-3xl h-full overflow-hidden">
      {loading ? (
        <div className="h-full w-full p-2 animate-pulse flex flex-col justify-between items-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 w-6 bg-muted rounded-full" />
            <div className="h-3 w-52 bg-muted rounded" />
          </div>
          <div className="h-12 w-12 bg-muted rounded-lg" />
        </div>
      ) : (
        <div className="flex flex-col justify-between  p-5 gap-3 h-full">
          <div className="flex justify-center items-center w-fit p-2 rounded-lg bg-muted">
            {icon}
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">{value}</h1>
            <p className="text-lg font-medium">{label}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsCardItem;
