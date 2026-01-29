import { Loader2 } from "lucide-react";

const LoadingContainer = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Loader2 className="animate-spin h-16 w-16" />
    </div>
  );
};

export default LoadingContainer;
