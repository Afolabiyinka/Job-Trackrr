import NavLayout from "@/modules/marketing/pages/NavLayout";
import { Outlet } from "react-router-dom";

const MarkettingLayout = () => {
  return (
    <div className="p-2 h-full w-full">
      <NavLayout />
      <Outlet />
    </div>
  );
};

export default MarkettingLayout;
