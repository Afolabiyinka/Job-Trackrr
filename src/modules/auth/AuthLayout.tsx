import { useUser } from "@/modules/main/settings/store/useUser";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user } = useUser();
  if (user) {
    return <Navigate to={`/dashboard`} replace />;
  }
  return (
    <div className="h-screen  w-screen flex flex-col justify-center items-center">
      {/* <span className="p-6 shadow w-full"></span> */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
