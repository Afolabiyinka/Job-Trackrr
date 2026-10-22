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
    <div className="flex min-h-28 items-center justify-between gap-4 rounded-2xl bg-muted/60 p-5 transition-colors hover:bg-muted sm:min-h-32 sm:p-6">
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
          {value.toLocaleString()}
        </p>
        <p className="text-sm leading-snug text-muted-foreground">{label}</p>
      </div>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/80 text-muted-foreground [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </div>
    </div>
  );
};

export default StatsCardItem;
