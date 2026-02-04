import Loader from "./Loader";

const LoadingContainer = () => {
  return (
    <div className="h-full shadow flex flex-col justify-center items-center">
      {/* <Loader2 className="animate-spin h-16 w-16" /> */}
      <Loader />
    </div>
  );
};

export default LoadingContainer;
