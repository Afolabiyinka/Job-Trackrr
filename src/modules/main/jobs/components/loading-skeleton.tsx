const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-muted ${className}`} />
);

const JobPageSkeleton = () => (
  <div
    className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-1 md:p-4"
    role="status"
    aria-label="Loading job details"
    aria-busy="true"
  >
    <span className="sr-only">Loading job details...</span>

    <div className="flex items-center justify-between gap-3">
      <Skeleton className="h-10 w-40 rounded-full" />
      <div className="flex shrink-0 gap-2">
        <Skeleton className="h-10 w-20 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>

    <header className="flex flex-col gap-5 rounded-3xl bg-muted/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex min-w-0 items-center gap-4">
        <Skeleton className="h-16 w-16 shrink-0 rounded-2xl" />
        <div className="flex min-w-0 flex-col gap-2">
          <Skeleton className="h-8 w-56 max-w-full" />
          <Skeleton className="h-4 w-40 max-w-full" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-36 rounded-full" />
      </div>
    </header>

    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,0.8fr)] lg:gap-8">
      <section className="rounded-2xl bg-muted/30 p-5 sm:p-7">
        <Skeleton className="h-6 w-32" />
        <div className="mt-3 grid gap-x-8 sm:grid-cols-2">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex items-start gap-3 py-4">
              <Skeleton className="mt-0.5 h-4 w-4 shrink-0 rounded-full" />
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-32 max-w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="rounded-2xl bg-muted/40 p-5 sm:p-7">
        <Skeleton className="h-6 w-44" />
        <div className="mt-6 space-y-6">
          {Array.from({ length: 2 }, (_, index) => (
            <div key={index} className="flex gap-3">
              <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-40 max-w-full" />
                <Skeleton className="h-4 w-28 max-w-full" />
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="space-y-4 rounded-2xl bg-background p-5 sm:p-7 lg:col-start-1">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 max-w-full" />
        <Skeleton className="h-4 w-2/3 max-w-full" />
      </section>
    </div>
  </div>
);

export default JobPageSkeleton;
