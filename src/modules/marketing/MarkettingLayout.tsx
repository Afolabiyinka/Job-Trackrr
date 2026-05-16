import NavLayout from "@/modules/marketing/pages/NavLayout";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const MarkettingLayout = () => {
  return (
    <div className="w-full relative font-[Inter]">
      <NavLayout />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MarkettingLayout;