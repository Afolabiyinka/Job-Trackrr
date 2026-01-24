import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAVLINKS } from "./utils/nav";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "../main/settings/store/useUser";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useUser();

  return (
    <div className="p-3 flex flex-col justify-between relative">
      <span className="flex justify-between relative w-full items-center">
        <h1 className="text-2xl tracking-wider font-[Inter] font-bold capitalize">
          JobTrackrr
        </h1>
        <MenuButton open={open} onClick={() => setOpen(!open)} />
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ translateY: -20 }}
            animate={{ translateY: 1 }}
            className={`transform overflow-hidden flex flex-col gap-3  ${
              open ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            {NAVLINKS.map(({ icon: Icon, name, path }, i) => {
              const pathMatch = location.pathname === path;
              return (
                <motion.span
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  key={i}
                >
                  <NavLink
                    to={path}
                    className={`flex gap-2 items-center rounded-lg p-1.5 text-md  transition ${
                      pathMatch
                        ? "bg-gray-200 dark:bg-gray-600 dark:text-white p-1.5"
                        : ""
                    }`}
                  >
                    <Icon className={`h-5 w-5 stroke-[1.25px]`} />
                    <p>{name}</p>
                  </NavLink>
                </motion.span>
              );
            })}

            <div className="mt-auto flex flex-col gap-3 border-t pt-4">
              <Link
                onClick={() => setOpen(false)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
