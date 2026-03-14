import logoImage from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center  justify-start p-2 px-4 rounded-3xl"
    >
      <img
        src={logoImage}
        alt="Job Trackrr Logo"
        className="w-12 h-9 object-contain"
        fetchPriority="high"
        loading="eager"
      />
      <span className="text-2xl font-bold tracking-wide">Job Trackrr</span>
    </Link>
  );
};

export default Logo;
