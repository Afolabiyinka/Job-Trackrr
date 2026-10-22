import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-muted ${className}`} />
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
    className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-1 md:gap-10 md:p-2"
    role="status"
    aria-label="Loading dashboard"
    aria-busy="true"
  >
    <span className="sr-only">Loading dashboard...</span>

    <section aria-label="Job search overview" className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-8 w-52" />
        </div>
        <Skeleton className="h-4 w-48" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="flex min-h-28 items-center justify-between gap-4 rounded-2xl bg-muted/60 p-5 sm:min-h-32 sm:p-6"
          >
            <div className="flex flex-col gap-2">
              <Skeleton className="h-9 w-16" />
              <Skeleton className="h-4 w-28" />
            </div>
            <Skeleton className="h-10 w-10 rounded-xl" />
          </div>
        ))}
      </div>
    </section>

    <section
      aria-label="Next steps"
      className="grid w-full items-stretch gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(19rem,0.9fr)] xl:gap-6"
    >
      <Card className="h-full w-full rounded-2xl bg-background shadow-none ring-0">
        <CardHeader className="gap-2 pb-3">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-4 w-64 max-w-full" />
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-muted/30 p-3"
            >
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="h-full w-full rounded-2xl bg-muted/30 shadow-none ring-0">
        <CardHeader className="gap-2 pb-3">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-52 max-w-full" />
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-9 w-32 rounded-full" />
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
