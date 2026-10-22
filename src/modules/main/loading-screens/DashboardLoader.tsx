import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-muted ${className}`} />
);

const StatsSkeleton = () => (
  <div className="flex h-full items-center justify-between gap-6 rounded-2xl bg-muted p-5">
    <div className="flex flex-col gap-2">
      <Skeleton className="h-8 w-16" />
      <Skeleton className="h-4 w-28" />
    </div>
    <Skeleton className="h-9 w-9 rounded-lg" />
  </div>
);

const ContactSkeleton = () => (
  <div className="flex min-w-56 items-center gap-3 rounded-xl border p-4">
    <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-3 w-20" />
    </div>
  </div>
);

const DashboardLoader = () => (
  <div
    className="flex w-full flex-col gap-2 p-1"
    role="status"
    aria-label="Loading dashboard"
    aria-busy="true"
  >
    <span className="sr-only">Loading dashboard...</span>

    <Card className="h-fit w-full shadow-none ring-0">
      <CardHeader>
        <Skeleton className="h-6 w-40" />
      </CardHeader>
      <CardContent className="grid gap-4 p-2 md:grid-cols-3">
        <StatsSkeleton />
        <StatsSkeleton />
      </CardContent>
    </Card>

    <section className="grid h-full w-full gap-6 md:grid-cols-1">
      <Card className="w-full shadow-none ring-0">
        <CardHeader className="gap-2">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 2 }, (_, index) => (
            <div key={index} className="flex items-center gap-3 rounded-xl p-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="w-full shadow-none ring-0">
        <CardHeader className="gap-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-10 w-40 rounded-full" />
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 3 }, (_, index) => (
              <ContactSkeleton key={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default DashboardLoader;
