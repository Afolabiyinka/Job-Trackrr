import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LightScreenShot from "@/assets/screenshots/Light-Screenshot.png";
import DarkScreenshot from "@/assets/screenshots/Dark Screenshot.png";
import { useTheme } from "@/modules/main/theme/useTheme";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="h-full w-full  flex-col flex justify-center items-center rounded-lg text-center p-3 md:p-10">
      {/* <Badge variant={`outline`} className="mb-4">
        <h1 className="md:text-lg">✨ Track your dream career</h1>
      </Badge> */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-3xl md:text-6xl font-bold tracking-tight leading-tight"
      >
        Never lose track of your <br />
        job applications
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0.8 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-md md:text-2xl leading-relaxed mt-5 text-muted-foreground"
      >
        Organise, track, and manage all your job applications in one place.{" "}
        <br /> Stay on top of every oppurtunity with powerful insights and
        reminders
      </motion.p>
      <motion.span
        initial={{ y: 50, opacity: 0.8 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6"
      >
        <Link to={`/how-it-works`}>
          <Button size={`lg`} variant={`outline`}>
            Learn More
          </Button>
        </Link>
        <Link to={`/auth/login`}>
          <Button size={`lg`}>
            Get Started
            <ArrowRight />
          </Button>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: 40, opacity: 0.8 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear", delay: 1 }}
        className="w-full h-full mt-10 rounded-2xl overflow-hidden shadow-2xl border bg-background backdrop-blur"
      >
        <img
          src={`${theme === "light" ? LightScreenShot : DarkScreenshot}`}
          alt="Job Trackrr Ui"
          fetchPriority="high"
        />
      </motion.span>
    </div>
  );
};

export default Home;
