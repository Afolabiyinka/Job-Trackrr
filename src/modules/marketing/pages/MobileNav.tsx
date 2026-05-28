import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAVLINKS } from "../utils/nav";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "@/modules/main/nav/components/MenuButton";
import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3 flex flex-col justify-between relative">
      <span className="flex justify-between relative w-full border border-border bg-background rounded-full p-3 px-6 items-center">
        <Logo />
        <MenuButton open={open} onClick={() => setOpen(!open)} />
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ translateY: -20 }}
            animate={{ translateY: 1 }}
            className={`transform overflow-hidden flex flex-col gap-6 p-3  ${open ? "max-h-96 py-4" : "max-h-0"
              }`}
          >
            {NAVLINKS.map(({ name, path, icon: Icon }, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "underline underline-offset-8 text-primary" : ""} flex items-center gap-2`
                }
              >
                <Icon size={18} />
                {name}
              </NavLink>
            ))}
            <span className="flex gap-3 items-center">
              <Link to={`/login`}>
                <Button variant={`link`}>
                  Log In
                </Button>
              </Link>

              <Link to={`/signup`}>
                <Button size={`lg`}>
                  Sign Up
                  <ArrowRight />
                </Button>
              </Link>
            </span>          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
