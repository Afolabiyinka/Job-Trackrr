import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAVLINKS } from "./utils/nav";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogout } from "../auth/hooks/useLogout";
import Logo from "@/components/logo/Logo";
import SearchInput from "./components/SearchInput";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { handleLogout } = useLogout();

  return (
    <div className="p-3 flex flex-col justify-between relative">
      <span className="flex justify-between relative w-full items-center">
        <Logo />
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
            <SearchInput />

            {NAVLINKS.map(({ icon: Icon, name, path }, i) => {
              const pathMatch = location.pathname === path;
              return (
                <motion.span
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3 "
                >
                  <motion.span
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{}}
                    className={`${pathMatch ? "border-l-2 border-l-primary rounded-full" : ""}`}
                  />

                  <NavLink
                    to={path}
                    className={`flex gap-2 items-center rounded-xl p-1.5 text-md  transition w-full ${
                      pathMatch ? "bg-primary/10 p-2.5" : ""
                    }`}
                  >
                    <Icon className={`h-5 w-5`} />
                    <p>{name}</p>
                  </NavLink>
                </motion.span>
              );
            })}

            <div className="mt-auto flex flex-col gap-3 border-t pt-4">
              <Link
                onClick={() => setOpen(false)}
                className="flex gap-2 mb-2 p-2 rounded-xl cursor-pointer"
                to={`settings`}
              >
                <Settings />
                Settings
              </Link>
              <Button
                className="justify-start gap-3"
                size={`lg`}
                onClick={() => handleLogout()}
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
