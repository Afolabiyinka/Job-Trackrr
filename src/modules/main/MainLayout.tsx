import { Navigate, Outlet } from "react-router-dom";
import NavLayout from "./nav/NavLayout";
import Greeting from "@/modules/main/nav/Greeting";
import Header from "@/modules/main/nav/Header";
import { motion } from "framer-motion";
import { useGetJobs } from "@/modules/main/jobs/hooks/useGetJobs";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { useEffect } from "react";
import { useUser } from "@/modules/main/settings/store/useUser";
import MainLayoutSkeleton from "./MainPgeSkeleton";

const MainLayout = () => {
  const { user, isAuthResolved } = useUser();
  const { data } = useGetJobs();
  const { setJobs } = useJobs();

  useEffect(() => {
    if (data?.data) {
      setJobs(data.data);
    }
  }, [data]);

  if (!isAuthResolved) {
    return <MainLayoutSkeleton />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.onboarded) {
    return <Navigate to={`/onboarding`} replace />;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen p-2">
      <aside className="lg:w-80">
        <NavLayout />
      </aside>

      <main className="w-full gap-2 flex flex-col md:p-4 p-2">
        <span className="w-full">
          <Greeting />
          <Header />
        </span>

        <motion.div className="h-full w-full overflow-y-scroll p-1 md:p-2 rounded-xl">
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default MainLayout;
