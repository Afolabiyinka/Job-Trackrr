import logoImage from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  collapsed?: boolean;
  linkTo?: string;
}

const Logo = ({ collapsed = false, linkTo = "dashboard" }: LogoProps) => {
  return (
    <Link
      to={linkTo}
      className="flex items-center justify-start rounded-3xl overflow-hidden"
      aria-label="Job Trackrr - Home"
    >
      <img
        src={logoImage}
        alt="Job Trackrr Logo"
        className="h-8 w-auto object-contain shrink-0"
        fetchPriority="high"
        loading="eager"
      />

      <motion.span
        initial={false}
        animate={{
          width: collapsed ? 0 : "auto",
          opacity: collapsed ? 0 : 1,
          marginLeft: collapsed ? 0 : "0.5rem",
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="text-xl font-bold tracking-tight"
      >
        Job Trackrr
      </motion.span>
    </Link>
  );
};

export default Logo;
