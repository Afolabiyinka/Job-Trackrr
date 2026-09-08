import { useEffect, useState } from "react";
import { jobMotivations } from "../jobs/libs/motivation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Header = () => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobMotivations.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-start  items-center mt-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={jobMotivations[index]}
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: -30, opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.7,
            ease: "easeInOut",
          }}
          className="text-lg font-heading tracking-wide md:text-center"
        >
          {jobMotivations[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Header;
