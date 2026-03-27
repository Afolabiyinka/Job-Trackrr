import { useUser } from "@/modules/main/settings/store/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { useFetchUser } from "../main/settings/hooks/useFetchUser";
import LoadingContainer from "@/components/loader/loadingcontainer";

const AuthLayout = () => {
  const { user } = useUser();
  const { loading } = useFetchUser();
  const hasOnboarded = localStorage.getItem("onboarded");
  if (user) {
    if (!hasOnboarded) {
      return <Navigate to={`/onboarding`} replace />;
    }
    return <Navigate to={`/dashboard`} replace />;
  }

  return (
    <div className="h-screen  w-screen flex flex-col justify-center items-center">
      {loading ? <LoadingContainer /> : <Outlet />}
    </div>
  );
};

export default AuthLayout;
