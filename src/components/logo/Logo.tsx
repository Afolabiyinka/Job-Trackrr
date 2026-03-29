import logoImage from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center  justify-start rounded-3xl">
      <img
        src={logoImage}
        alt="Job Trackrr Logo"
        className="md:w-12 not-only: h-9 object-contain"
        fetchPriority="high"
        loading="eager"
      />
      <span className="text-2xl font-bold tracking-wide">Job Trackrr</span>
    </Link>
  );
};

export default Logo;
