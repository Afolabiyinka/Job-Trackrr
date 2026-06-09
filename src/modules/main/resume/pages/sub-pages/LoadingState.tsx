import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkeletonBlock = ({ className }: { className?: string }) => (
  <div className={`bg-muted animate-pulse rounded-full ${className}`} />
);

const ResultsSkeleton = () => {
  return (
    <div>
      <div className="p-3 flex justify-between items-center flex-col md:flex-row gap-3">
        <div className="flex items-center gap-3 border p-2 px-4 rounded-full">
          <SkeletonBlock className="h-10 w-10 rounded-full" />
          <SkeletonBlock className="h-6 w-40" />
        </div>

        <div className="flex items-center gap-2">
          <SkeletonBlock className="h-10 w-40 rounded-full" />
          <SkeletonBlock className="h-10 w-10 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-1 gap-4">
        <div className="p-1 grid md:grid-cols-2 gap-10 w-full">
          <Card>
            <CardHeader>
              <SkeletonBlock className="h-6 w-48 mb-2" />
              <SkeletonBlock className="h-4 w-64" />
            </CardHeader>
            <CardContent className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <SkeletonBlock key={i} className="h-4 w-full" />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <SkeletonBlock className="h-6 w-48 mb-2" />
              <SkeletonBlock className="h-4 w-64" />
            </CardHeader>
            <CardContent className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <SkeletonBlock key={i} className="h-4 w-full" />
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="w-full">
          <CardHeader>
            <SkeletonBlock className="h-6 w-64" />
          </CardHeader>
          <CardContent className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <SkeletonBlock key={i} className="h-4 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsSkeleton;
