import { useUser } from "@/modules/main/settings/store/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { useFetchUser } from "../main/settings/hooks/useFetchUser";
import LoadingContainer from "@/components/loader/loadingcontainer";
import { motion } from "framer-motion";
import signup_img from "@/assets/auth_image.svg";

const AuthLayout = () => {
  const { user } = useUser();
  const { loading } = useFetchUser();
  const hasOnboarded = localStorage.getItem("onboarded");
  if (user) {
    if (!hasOnboarded) {
      return <Navigate to={`/onboarding`} replace />;
    }
    return <Navigate to={`/dashboard`} replace />;
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-4 md:p-10">
      {loading ? (
        <LoadingContainer />
      ) : (
        <div className="h-full w-full flex flex-col md:flex-row gap-6 justify-center items-center p-4 md:p-10">
          <div className="w-full md:w-1/2 md:flex justify-center hidden h-full">
            <img
              src={signup_img}
              alt="Welcome"
              className="w-full h-full object-contain p-10"
            />
          </div>

          <motion.div
            className="w-full h-full md:w-1/2 rounded-lg"

          >
            <Outlet />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;