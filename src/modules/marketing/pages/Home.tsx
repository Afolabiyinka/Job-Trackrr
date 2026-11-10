import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import LightScreenShot from "@/assets/screenshots/new_light_screenshot.png";
import DarkScreenshot from "@/assets/screenshots/new_dark_screenshot.png";
import { useTheme } from "@/modules/main/theme/useTheme";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full flex flex-col items-center px-4 pt-20 pb-24 lg:px-12">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 text-center w-full max-w-3xl flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-extrabold leading-[1.1] font-heading"
        >
          Never lose track of your <span>job applications</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-md lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
        >
          Organize, track, and manage all your job applications in one place.
          Stay on top of every opportunity with powerful insights and reminders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-2"
        >
          <Link to="/login">
            <Button size="lg" className="w-full sm:w-auto">
              Get started for free
              <ArrowRight />
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          Join <span className="font-semibold text-foreground">500+</span> job
          seekers who landed their dream roles
        </motion.p>
      </motion.div>

      {/* Product image */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative w-full max-w-7xl mt-16"
      >
        <div className="w-full overflow-hidden bg-background border rounded-2xl shadow-2xl">
          <img
            src={theme === "light" ? LightScreenShot : DarkScreenshot}
            alt="Job Trackrr dashboard interface"
            className="w-full h-auto"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
