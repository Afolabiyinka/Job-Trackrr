import NavLayout from "@/modules/marketing/pages/NavLayout";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const MarkettingLayout = () => {
  return (
    <div className="w-full relative">
      <NavLayout />
      <div className="md:pt-16 pt-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MarkettingLayout;