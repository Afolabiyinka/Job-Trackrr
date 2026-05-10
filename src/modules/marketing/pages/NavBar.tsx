import { NavLink, Link } from "react-router-dom";
import { NAVLINKS } from "../utils/nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/logo/Logo";

const NavBar = () => {
  return (
    <div className="p-2 w-full flex justify-center items-center px-16">
      <div className="flex lg:flex justify-around items-center border p-3 w-full rounded-full">
        <Logo />
        <span className="flex gap-10">
          {NAVLINKS.map(({ name, path, icon: Icon }, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                `${isActive ? "underline underline-offset-8 text-primary" : ""} flex items-center gap-2 hover:text-primary`
              }
            >
              <Icon size={18} />
              {name}
            </NavLink>
          ))}
        </span>

        <span className="flex gap-1">
          <Link to={`/login`}>
            <Button variant={`link`} size={`lg`}>
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
