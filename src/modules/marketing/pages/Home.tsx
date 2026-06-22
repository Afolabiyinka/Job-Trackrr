import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LightScreenShot from "@/assets/screenshots/Light Screenshot.png";
import DarkScreenshot from "@/assets/screenshots/Dark Screenshot.png";
import { useTheme } from "@/modules/main/theme/useTheme";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const { theme } = useTheme();

  const features = [
    "Track unlimited applications",
    "AI-powered resume insights",
    "Never miss a deadline",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-20 lg:px-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center lg:text-left"
        >
          <Badge
            variant={`secondary`}
            className="inline-flex items-center gap-2 p-3 h-12 px-6 text-sm font-medium bg-muted/50"
          >
            Your job search, simplified
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-6xl font-extrabold leading-[1.1] lg:max-w-2xl font-[Inter]"
          >
            Never lose track of your{" "}
            <span className="text-primary">job applications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-md lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 "
          >
            Organize, track, and manage all your job applications in one place.
            Stay on top of every opportunity with powerful insights and
            reminders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col lg:flex-row gap-4 lg:justify-start justify-center items-center pt-4"
          >
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {/* <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Lightbulb className="mr-2 h-4 w-4" />
                See how it works
              </Button>
            </Link> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-muted-foreground pt-4"
          >
            Join <span className="font-semibold text-foreground">500+</span> job
            seekers who landed their dream roles
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full"
        >
          <div className="relative w-full rounded-2xl overflow-hidden  bg-background transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={theme === "light" ? LightScreenShot : DarkScreenshot}
              alt="Job Trackrr dashboard interface"
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-muted z-30 border shadow-xl rounded-xl px-6 py-4 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full  bg-muted/50 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">Applications tracked</p>
                <p className="text-2xl font-bold text-primary">1,247+</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
