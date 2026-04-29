import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAVLINKS } from "./utils/nav";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import { Bell, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogout } from "../../auth/hooks/useLogout";
import Logo from "@/components/logo/Logo";
import SearchInput from "./components/SearchInput";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { handleLogout } = useLogout();

  return (
    <div className="p-2  flex flex-col justify-between relative">
      <span className="flex justify-between relative w-full items-center">
        <Logo />
        <div className="flex gap-2 items-center">
          <SearchInput />
          <Button variant={`secondary`} size={`icon-lg`}>
            <Bell />
          </Button>
          <MenuButton open={open} onClick={() => setOpen(!open)} />
        </div>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ translateY: -20 }}
            exit={{ translateY: -1 }}
            animate={{ translateY: 1 }}
            className={`transform overflow-hidden flex flex-col gap-3 p-2 rounded-lg ${open ? "max-h-full py-4" : "max-h-0"
              }`}
          >
            {NAVLINKS.map(({ icon: Icon, name, path }, i) => {
              const pathMatch = location.pathname.includes(path);
              return (
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  key={i}
                  onClick={() => setOpen(!open)}
                  className="flex"
                >
                  <motion.span
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{}}
                    className={`${pathMatch ? "rounded-full" : ""}`}
                  />

                  <NavLink
                    to={path}
                    className={`flex gap-2 items-center rounded-3xl p-1.5 text-md px-3  transition w-full ${pathMatch ? "bg-primary text-white p-3" : "hover:bg-muted p-3"
                      }`}
                  >
                    <Icon className={`h-4.5 w-4.5 stroke-[1.25px]`} />
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
                variant={`destructive`}
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
