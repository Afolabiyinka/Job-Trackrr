import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LightScreenShot from "@/assets/screenshots/Light Screenshot.png";
import DarkScreenshot from "@/assets/screenshots/Dark Screenshot.png";
import { useTheme } from "@/modules/main/theme/useTheme";

const Home = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-10 md:px-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center justify-center">

        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Never lose track of your job applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed"
          >
            Organize, track, and manage all your job applications in one place.
            Stay on top of every opportunity with powerful insights and reminders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link to="/how-it-works">
              <Button size="lg" variant="outline">
                <Lightbulb className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </Link>

            <Link to="/login">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full"
        >
          <div className="w-full rounded-xl overflow-hidden border  bg-background">
            <img
              src={theme === "light" ? LightScreenShot : DarkScreenshot}
              alt="Job Trackrr UI"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;