import { Navigate, Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";
import Greeting from "@/modules/nav/Greeting";
import Header from "@/modules/nav/Header";
import { motion } from "framer-motion";
import { useFetchUser } from "@/modules/main/settings/hooks/useFetchUser";

const MainLayout = () => {
  const { error } = useFetchUser();

  if (error) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen p-1">
      <aside className="lg:w-80">
        <NavLayout />
      </aside>

      <main className="w-full gap-3 flex flex-col border rounded-lg">
        <span className="w-full shadow">
          <Greeting />
          <Header />
        </span>

        <motion.div
          className="h-full w-full overflow-y-scroll p-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default MainLayout;
