import { NavLink, Link } from "react-router-dom";
import { NAVLINKS } from "../utils/nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/logo/Logo";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className="fixed top-0 z-50 hidden w-full justify-center bg-transparent px-16 py-2 lg:flex">
      <div
        className={`flex w-full items-center justify-around rounded-full p-2.5 transition-[max-width,background-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none ${
          isScrolled
            ? "mx-auto max-w-6xl bg-background/90 border backdrop-blur-md"
            : "mx-auto max-w-6xl bg-background border"
        }`}
      >
        <Logo linkTo="/" />
        <span className="flex gap-10">
          {NAVLINKS.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {name}
            </NavLink>
          ))}
        </span>

        <span className="flex gap-3 items-center">
          <Link to={`/login`}>
            <Button variant={`link`}>Log In</Button>
          </Link>

          <Link to={`/signup`}>
            <Button size={`lg`}>
              Sign Up
              <ArrowRight />
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
