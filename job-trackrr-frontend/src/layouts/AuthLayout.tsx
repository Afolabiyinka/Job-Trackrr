import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen  w-screen flex flex-col justify-center items-center">
      <span className="p-6 shadow w-full"></span>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
