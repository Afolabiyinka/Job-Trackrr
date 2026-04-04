const JobPageSkeleton = () => {
  return (
    <div className="mx-auto p-3 animate-pulse">
      {/* Back button */}
      <div className="mb-4">
        <div className="h-10 w-28 bg-muted rounded-lg" />
      </div>

      {/* Header Card */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between bg-card rounded-2xl p-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="h-16 w-16 rounded-full bg-muted" />

          {/* Company info */}
          <div className="space-y-2">
            <div className="h-5 w-40 bg-muted rounded" />
            <div className="h-4 w-52 bg-muted rounded" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <div className="h-10 w-24 bg-muted rounded-lg" />
          <div className="h-10 w-24 bg-muted rounded-lg" />
        </div>
      </div>

      {/* Main Details Card */}
      <div className="mt-6 bg-card  rounded-2xl p-5 ">
        {/* Title row */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-b pb-4 mb-6">
          <div className="h-7 w-60 bg-muted rounded" />

          <div className="h-8 w-56 bg-muted rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-24 bg-muted rounded" />
              <div className="h-6 w-32 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className="mt-6 bg-card  rounded-2xl p-6  space-y-3">
        <div className="h-5 w-32 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>
    </div>
  );
};

export default JobPageSkeleton;
