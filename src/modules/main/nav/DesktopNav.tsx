import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAVLINKS } from "./utils/nav";
import { useLogout } from "../../auth/hooks/useLogout";
import Logo from "@/components/logo/Logo";
import Settings from "../settings/pages/Settings";
import SpinningLoader from "@/components/loader/spinningloader";

const DesktopNav = () => {
  const location = useLocation();
  const { logoutLoading,
    logoutMutate
  } = useLogout();

  return (
    <nav className="h-full w-full lg:flex hidden flex-col gap-6 p-3">
      <Logo />
      <hr />

      <div className="flex flex-col gap-4 w-full">
        {NAVLINKS.map(({ icon: Icon, name, path }, i) => {
          const isActive = location.pathname.includes(path);
          return (
            <div key={i} className="relative flex items-center gap-2">
              <motion.div whileTap={{ scale: 0.95 }} className="flex-1">
                <NavLink
                  to={path}
                  className={`flex gap-2 items-center rounded-3xl px-3 py-3 text-md transition w-full ${isActive
                    ? "bg-primary text-white"
                    : "hover:bg-muted"
                    }`}
                >
                  <Icon className="h-4.5 w-4.5 stroke-[1.25px]" />
                  <p>{name}</p>
                </NavLink>
              </motion.div>

              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -right-3 h-full w-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t pt-4">
        <Settings />
        <Button
          className="relative justify-start gap-3"
          size="lg"
          variant="destructive"
          onClick={() => logoutMutate()}
          disabled={logoutLoading}
        >
          {logoutLoading && (
            <SpinningLoader />
          )}

          <span className={logoutLoading ? "opacity-0" : "flex items-center gap-3"}>
            <LogOut className="h-4.5 w-4.5" />
            Logout
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNav;