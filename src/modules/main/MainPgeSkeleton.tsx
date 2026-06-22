import { motion } from "framer-motion";

const Shimmer = ({ className = "" }: { className?: string }) => (
  <div
    className={`relative overflow-hidden bg-muted rounded-md animate-pulse ${className}`}
  >
    <motion.div className="absolute inset-0 -translate-x-full" />
  </div>
);

const NavSkeleton = () => (
  <div className="flex flex-col h-full">
    {/* logo */}
    <div className="flex items-center gap-2 px-2 pb-6">
      <Shimmer className="h-8 w-8 rounded-full" />
      <Shimmer className="h-5 w-24" />
    </div>

    {/* nav items */}
    <div className="flex flex-col gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 px-3 py-3">
          <Shimmer className="h-5 w-5 rounded" />
          <Shimmer className="h-4 w-20" />
        </div>
      ))}
    </div>

    <div className="flex-1" />

    {/* settings + logout */}
    <div className="flex flex-col gap-2 mt-auto">
      <div className="flex items-center gap-3 px-3 py-3">
        <Shimmer className="h-5 w-5 rounded" />
        <Shimmer className="h-4 w-16" />
      </div>
      <div className="flex items-center gap-3 px-3 py-3">
        <Shimmer className="h-5 w-5 rounded" />
        <Shimmer className="h-4 w-14" />
      </div>
    </div>
  </div>
);

const HeaderSkeleton = () => (
  <div className="w-full flex items-start justify-between">
    <div className="flex flex-col gap-3">
      <Shimmer className="h-7 w-64" />
      <Shimmer className="h-4 w-72" />
    </div>
    <Shimmer className="h-10 w-28 rounded-full" />
  </div>
);

const StatCard = () => (
  <div className="rounded-xl p-6 flex-1">
    <Shimmer className="h-10 w-10 rounded-lg mb-6" />
    <Shimmer className="h-7 w-8 mb-3" />
    <Shimmer className="h-4 w-28" />
  </div>
);

const ContentSkeleton = () => (
  <div className="flex flex-col gap-8">
    {/* date */}
    <Shimmer className="h-5 w-36" />

    {/* stat cards */}
    <div className="flex gap-6">
      <StatCard />
      <StatCard />
    </div>

    {/* goals */}
    <div className="flex flex-col gap-4">
      <Shimmer className="h-5 w-16" />
      <Shimmer className="h-4 w-44" />
      <Shimmer className="h-11 w-36 rounded-full mt-1" />

      <div className="flex flex-wrap gap-4 mt-2">
        <Shimmer className="h-12 flex-1 min-w-[220px] rounded-lg" />
        <Shimmer className="h-12 flex-1 min-w-[220px] rounded-lg" />
        <Shimmer className="h-12 flex-1 min-w-[220px] rounded-lg" />
      </div>
    </div>

    {/* manage contacts */}
    <div className="flex flex-col gap-3">
      <Shimmer className="h-5 w-32" />
      <Shimmer className="h-4 w-56" />
      <Shimmer className="h-11 w-44 rounded-full mt-1" />
    </div>
  </div>
);

const MainLayoutSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full p-2">
      <aside className="lg:w-80 p-4">
        <NavSkeleton />
      </aside>

      <main className="w-full gap-2 flex flex-col md:p-4 p-2">
        <span className="w-full">
          <HeaderSkeleton />
        </span>

        <div className="h-full w-full overflow-y-scroll p-1 md:p-2 rounded-xl">
          <ContentSkeleton />
        </div>
      </main>
    </div>
  );
};

export default MainLayoutSkeleton;

// shared page header: title + subtitle + CTA button
const PageHeaderSkeleton = ({ ctaWidth = "w-44" }: { ctaWidth?: string }) => (
  <div className="flex items-start justify-between">
    <div className="flex flex-col gap-3">
      <Shimmer className="h-8 w-56" />
      <Shimmer className="h-4 w-72" />
    </div>
    <Shimmer className={`h-12 ${ctaWidth} rounded-full`} />
  </div>
);

// shared row card: avatar + name/subtitle on left, meta on right
const RowCardSkeleton = ({ withMeta = true }: { withMeta?: boolean }) => (
  <div className="border border-zinc-200 rounded-xl p-5 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Shimmer className="h-11 w-11 rounded-full" />
      <div className="flex flex-col gap-2">
        <Shimmer className="h-4 w-40" />
        <Shimmer className="h-3 w-28" />
      </div>
    </div>
    {withMeta && (
      <div className="flex flex-col items-end gap-2">
        <Shimmer className="h-3 w-32" />
        <Shimmer className="h-4 w-20" />
      </div>
    )}
  </div>
);

const ViewToggleSkeleton = () => (
  <div className="flex items-center gap-3">
    <Shimmer className="h-10 w-24 rounded-full" />
    <Shimmer className="h-10 w-28 rounded-full" />
    <Shimmer className="h-10 w-28 rounded-full" />
  </div>
);

// /jobs skeleton
export const JobsPageSkeleton = () => (
  <div className="flex flex-col gap-6">
    <PageHeaderSkeleton ctaWidth="w-40" />
    <ViewToggleSkeleton />
    <div className="flex flex-col gap-4 mt-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <RowCardSkeleton key={i} withMeta />
      ))}
    </div>
  </div>
);

// /contacts skeleton
export const ContactsPageSkeleton = () => (
  <div className="flex flex-col gap-6">
    <PageHeaderSkeleton ctaWidth="w-36" />
    <div className="flex flex-col gap-4 mt-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <RowCardSkeleton key={i} withMeta={false} />
      ))}
    </div>
  </div>
);
