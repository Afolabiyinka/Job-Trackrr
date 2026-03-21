import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.span
      animate={{
        rotate: [0, 20, -10, 20, -5, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
      style={{ display: "inline-block", fontSize: "2rem" }}
    >
      👋
    </motion.span>
  );
};

export default WavingHand;
