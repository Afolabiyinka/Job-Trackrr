import { NavLink, Link } from "react-router-dom";
import { NAVLINKS } from "../utils/nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/logo/Logo";

const NavBar = () => {
  return (
    <div className="p-2 w-full md:flex justify-center items-center px-16 hidden fixed top-0 z-50">
      <div className="flex lg:flex justify-around items-center border p-3 w-full rounded-full bg-background shadow-sm">
        <Logo />
        <span className="flex gap-10">
          {NAVLINKS.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors ${isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              <Icon className="w-4.5 h-4.5" />
              {name}
            </NavLink>
          ))}
        </span>

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
        </span>
      </div>
    </div>
  );
};

export default NavBar;