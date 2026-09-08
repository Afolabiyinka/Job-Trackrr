import React from "react";

interface Props {
  value: number;
  label: string;
  icon: React.ReactNode;
  loading?: boolean;
}

const StatsCardItem = ({ value, label, icon, loading }: Props) => {
  if (loading) {
    return (
      <div className="border rounded-2xl h-full p-5 flex flex-col justify-between gap-6 animate-pulse">
        <div className="h-9 w-9 rounded-lg bg-muted" />
        <div className="flex flex-col gap-2">
          <div className="h-8 w-14 bg-muted rounded" />
          <div className="h-4 w-24 bg-muted rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl h-full p-5 flex  justify-between gap-6 transition-colors  bg-muted">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-3xl font-semibold tracking-tight tabular-nums">
          {value.toLocaleString()}
        </h1>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
      <div className="flex justify-center items-center w-9 h-9 rounded-lg bg-muted text-muted-foreground [&>svg]:h-4.5 [&>svg]:w-4.5">
        {icon}
      </div>
    </div>
  );
};

export default StatsCardItem;
