import { Navigate, Outlet, } from "react-router-dom";
import NavLayout from "./nav/NavLayout";
import Greeting from "@/modules/main/nav/Greeting";
import Header from "@/modules/main/nav/Header";
import { motion } from "framer-motion";
import { useGetJobs } from "@/modules/main/jobs/hooks/useGetJobs";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { useEffect } from "react";
import { useUser } from "@/modules/main/settings/store/useUser";

const MainLayout = () => {
  const { user, isAuthResolved } = useUser();
  const { data } = useGetJobs();
  const { setJobs } = useJobs();

  useEffect(() => {
    if (data) {
      setJobs(data?.jobs);
    }
  }, [data, setJobs]);

  if (!isAuthResolved) {
    return (
      <div className="h-screen w-full flex justify-center items-center">Loading..</div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }



  return (
    <div className="flex flex-col lg:flex-row h-screen p-2">
      <aside className="lg:w-80">
        <NavLayout />
      </aside>

      <main className="w-full gap-3 flex flex-col md:p-3">
        <span className="w-full">
          <Greeting />
          <Header />
        </span>

        <motion.div className="h-full w-full overflow-y-scroll p-2 rounded-xl">
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default MainLayout;
