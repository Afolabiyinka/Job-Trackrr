import Loader from "./Loader";

const LoadingContainer = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center rounded-lg">
      <Loader />
    </div>
  );
};

export default LoadingContainer;
