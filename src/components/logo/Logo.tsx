import logoImage from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 justify-start p-2 px-3 rounded-3xl  text-primary"
    >
      <img src={logoImage} alt="Job Trackrr Logo" className="w-9 h-9 " />
      <span className="text-2xl font-semibold tracking-tight">Job Trackrr</span>
    </Link>
  );
};

export default Logo;
