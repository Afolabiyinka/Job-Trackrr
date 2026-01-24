import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAVLINKS } from "./utils/nav";
import { useUser } from "../main/settings/store/useUser";

const DesktopNav = () => {
  const location = useLocation();
  const { logout } = useUser();
  return (
    <nav className="h-full w-full lg:flex hidden flex-col gap-6 rounded-lg p-3 ">
      <h1 className="text-2xl tracking-wider font-[Inter] font-bold capitalize">
        JobTrackrr
      </h1>

      <div className="flex flex-col gap-4 w-full">
        {NAVLINKS.map(({ icon: Icon, name, path }, i) => {
          const pathMatch = location.pathname === path;
          return (
            <motion.span whileTap={{ scale: 0.95 }} key={i}>
              <NavLink
                to={path}
                className={`flex gap-2 items-center rounded-lg p-1.5 text-md  transition ${
                  pathMatch
                    ? "bg-gray-200 dark:bg-gray-600 dark:text-white p-2.5"
                    : ""
                }`}
              >
                <Icon className={`h-5 w-5 stroke-[1.25px]`} />
                <p>{name}</p>
              </NavLink>
            </motion.span>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t pt-4">
        <Link
          className="flex gap-2 mb-2 p-2 rounded-lg cursor-pointer"
          to={`/settings`}
        >
          <Settings />
          Settings
        </Link>
        <Button
          className="justify-start gap-3"
          size={`lg`}
          onClick={() => logout()}
        >
          <LogOut className="h-10 w-10" />
          Log out
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNav;
