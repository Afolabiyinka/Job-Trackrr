import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LightScreenMode from "@/assets/Light Screenshot.png";
import DarkScreenshot from "@/assets/Dark Screenshot.png";
import { useTheme } from "@/modules/theme/useTheme";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="h-full w-full  flex-col flex justify-center items-center rounded-lg text-center p-3 md:p-10 bg-gradient-to-b from-background to-muted/20">
      <Badge variant={`outline`} className="mb-4">
        <h1 className="md:text-lg">
          ✨ The simplest way to track job applications
        </h1>
      </Badge>
      <motion.h1
        initial={{ y: 50, opacity: 0.8 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-3xl md:text-6xl font-bold tracking-tight leading-tight"
      >
        Track your Progress, <br />
        No Distractions
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0.8 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-md md:text-2xl leading-relaxed mt-5 text-muted-foreground"
      >
        Job Trackrr keeps things simple -fast logging, clean design, <br />
        zero fluff, focus on the things that matter
      </motion.p>
      <motion.span
        initial={{ y: 50, opacity: 0.8 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6"
      >
        <Link to={`/explore`}>
          <Button size={`lg`} variant={`outline`}>
            Learn More
          </Button>
        </Link>
        <Link to={`/auth/login`}>
          <Button size={`lg`}>
            Get Started
            <ArrowUpRight />
          </Button>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: 40, opacity: 0.8 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear", delay: 1 }}
        className="w-full mt-10 rounded-2xl overflow-hidden shadow-2xl border bg-background backdrop-blur"
      >
        <img
          src={`${theme === "light" ? LightScreenMode : DarkScreenshot}`}
          alt="Job Trackrr Ui"
        />
      </motion.span>
    </div>
  );
};

export default Home;
