import logoImage from "@/assets/green-logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 justify-start p-2 px-4 rounded-3xl bg-background"
    >
      <img
        src={logoImage}
        alt="Job Trackrr Logo"
        className="w-10 h-10"
        fetchPriority="high"
        loading="eager"
      />
      <span className="text-2xl font-bold tracking-wide">Job Trackrr</span>
    </Link>
  );
};

export default Logo;
