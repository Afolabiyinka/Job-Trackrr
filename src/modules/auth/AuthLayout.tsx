import { useUser } from "@/modules/main/settings/store/useUser";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user } = useUser();
  const hasOnboarded = localStorage.getItem("onboarded");
  if (user) {
    if (!hasOnboarded) {
      return <Navigate to={`/onboarding`} replace />;
    }
    return <Navigate to={`/dashboard`} replace />;
  }
  return (
    <div className="h-screen  w-screen flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
