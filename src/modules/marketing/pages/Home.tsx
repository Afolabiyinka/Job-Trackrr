import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomePageImage from "@/assets/HomePage.png";

const Home = () => {
  return (
    <div className="h-full w-full  flex-col flex justify-center items-center rounded-lg text-center p-3 md:p-10">
      <Badge variant={`outline`} className="mb-4">
        <h1 className="md:text-lg">
          ✨ The simplest way to track job applications
        </h1>
      </Badge>
      <motion.h1
        initial={{ y: 50, opacity: 0.8 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-2xl md:text-6xl font-extrabold tracking-widest"
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
        className="flex gap-6 items-center mt-3 mb-5"
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
        className="h-full w-full border rounded-xl bg-background overflow-hidden border-r-muted border-r-8 border-b-muted border-b-8"
      >
        <img src={HomePageImage} alt="Job Trackrr Ui" />
      </motion.span>
    </div>
  );
};

export default Home;
