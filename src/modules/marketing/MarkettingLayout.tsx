import NavLayout from "@/modules/marketing/pages/NavLayout";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const MarkettingLayout = () => {
  return (
    <div className={`p-2 h-full w-full`}>
      <NavLayout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MarkettingLayout;
