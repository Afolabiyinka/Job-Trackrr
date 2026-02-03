import { useEffect, useState } from "react";
import { jobMotivations } from "../main/jobs/libs/motivation";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobMotivations.length);
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex justify-start items-center p-1 ml-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={jobMotivations[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center md:text-lg"
        >
          {jobMotivations[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Header;
