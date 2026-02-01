import { useEffect, useState } from "react";
import { jobMotivations } from "../main/jobs/libs/motivation";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobMotivations.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full p-3 flex justify-start items-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={jobMotivations[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center text-xl"
        >
          {jobMotivations[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Header;
