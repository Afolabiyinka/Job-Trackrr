import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAVLINKS } from "./utils/nav";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import { LogOut, Settings } from "lucide-react";
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
        <MenuButton open={open} onClick={() => setOpen(!open)} />
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ translateY: -20 }}
            exit={{ translateY: -1 }}
            animate={{ translateY: 1 }}
            className={`transform overflow-hidden flex flex-col gap-3 p-2 rounded-lg ${
              open ? "max-h-full py-4" : "max-h-0"
            }`}
          >
            <SearchInput />
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
                    className={`flex gap-2 items-center rounded-xl p-2.5 text-md  transition w-full ${
                      pathMatch ? "bg-primary/10" : ""
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${pathMatch && "text-primary"}`}
                    />
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
