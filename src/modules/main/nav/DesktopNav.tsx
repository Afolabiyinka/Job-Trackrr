import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAVLINKS } from "./utils/nav";
import { useLogout } from "../../auth/hooks/useLogout";
import Logo from "@/components/logo/Logo";

const DesktopNav = () => {
  const location = useLocation();

  const { handleLogout } = useLogout();
  return (
    <nav className="h-full w-full lg:flex hidden flex-col gap-6 rounded-xl p-3 ">
      <Logo />
      <hr />

      <div className="flex flex-col gap-4 w-full">
        {NAVLINKS.map(({ icon: Icon, name, path }, i) => {
          const pathMatch = location.pathname.includes(path);
          return (
            <motion.span
              whileTap={{ scale: 0.95 }}
              key={i}
              className="flex gap-2"
            >
              <motion.span
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{}}
                className={`${pathMatch ? "border-l-4 border-l-primary/70 rounded-full" : ""}`}
              />

              <NavLink
                to={path}
                className={`flex gap-2 items-center rounded-xl p-1.5 text-md  transition w-full ${
                  pathMatch ? "bg-primary/10 p-3" : "hover:bg-muted p-3"
                }`}
              >
                <Icon className={`h-4.5 w-4.5 stroke-[1px]`} />
                <p>{name}</p>
              </NavLink>
            </motion.span>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t pt-4">
        <Link
          className="flex gap-2 mb-2 p-2 rounded-xl cursor-pointer"
          to={`settings`}
        >
          <Settings />
          Settings
        </Link>
        <Button
          className="justify-start gap-3"
          size={`lg`}
          variant={"destructive"}
          onClick={() => handleLogout()}
        >
          <LogOut className="h-10 w-10" />
          Log out
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNav;
