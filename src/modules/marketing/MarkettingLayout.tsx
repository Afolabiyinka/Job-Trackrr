import NavLayout from "@/modules/marketing/pages/NavLayout";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import { useTheme } from "../main/theme/useTheme";

const MarkettingLayout = () => {
  const { theme } = useTheme();
  return (
    <div className={`p-2 h-full w-full ${theme === "light" && "bg-primary/5"}`}>
      <NavLayout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MarkettingLayout;
