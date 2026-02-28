import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAVLINKS } from "../utils/nav";
import { NavLink } from "react-router-dom";
import MenuButton from "@/modules/nav/components/MenuButton";
import Logo from "@/components/logo/Logo";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

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
            className={`transform overflow-hidden flex flex-col gap-6  ${
              open ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            {NAVLINKS.map(({ name, path, icon: Icon }, i) => (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "underline underline-offset-8 text-primary" : ""} flex items-center gap-2`
                }
              >
                <Icon size={18} />
                {name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
