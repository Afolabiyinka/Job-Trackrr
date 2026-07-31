import { RefreshCw, WifiOff, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  action?: () => void;
}

const ErrorPage = ({ action }: ErrorPageProps) => {
  const offline = !navigator.onLine;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          {offline ? (
            <WifiOff className="h-7 w-7 text-muted-foreground" />
          ) : (
            <ServerCrash className="h-7 w-7 text-muted-foreground" />
          )}
        </div>

        <h2 className="text-2xl font-semibold tracking-tight">
          {offline ? "You're offline" : "Something went wrong"}
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {offline
            ? "It looks like you've lost your internet connection. Check your connection and try again."
            : "We couldn't load your data right now. Don't worry, your information is safe. Please try again."}
        </p>

        <Button onClick={action} className="mt-6 gap-2" size="lg">
          <RefreshCw className="h-4 w-4" />
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
