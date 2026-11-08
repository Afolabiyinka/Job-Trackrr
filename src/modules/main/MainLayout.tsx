import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavLayout from "./nav/NavLayout";
import Greeting from "@/modules/main/nav/Greeting";
import Header from "@/modules/main/nav/Header";
import { motion } from "framer-motion";
import { useGetJobs } from "@/modules/main/jobs/hooks/useGetJobs";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { useEffect, useState } from "react";
import { useUser } from "@/modules/main/settings/store/useUser";
import MainLayoutSkeleton from "./MainPgeSkeleton";
import ErrorPage from "./loading-screens/ErrorRefetch";

const MainLayout = () => {
  const [networkError, setNetwork] = useState(!navigator.onLine);
  const { pathname } = useLocation();
  const isSettingsRoute =
    pathname === "/settings" || pathname.startsWith("/settings/");

  const { user, isAuthResolved } = useUser();
  const { data } = useGetJobs();
  const { setJobs, setJobsLength } = useJobs();

  useEffect(() => {
    const handleOnline = () => {
      setNetwork(false);
    };

    const handleOffline = () => {
      setNetwork(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (data?.data) {
      setJobs(data.data);
      setJobsLength(data.pagination.total);
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
      <aside>
        <NavLayout />
      </aside>

      <div className="flex-1 min-h-0 min-w-0 flex flex-col items-center md:p-4 p-2 pb-28 lg:pb-4 overflow-y-auto">
        {networkError ? (
          <ErrorPage />
        ) : (
          <main className="w-full h-full lg:w-[80%] gap-2 flex flex-col">
            {!isSettingsRoute && (
              <span className="w-full">
                <Header />
                <Greeting />
              </span>
            )}

            <motion.div className="w-full p-1 md:p-4 rounded-xl h-full">
              <Outlet />
            </motion.div>
          </main>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
