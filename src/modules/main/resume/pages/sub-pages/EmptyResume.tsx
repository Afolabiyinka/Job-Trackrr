import { motion, type Variants } from "framer-motion";
import resume_image from "@/assets/images/resume_image.svg";
import { FolderOpen } from "lucide-react";
import UploadResume from "../../components/UploadResume";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const EmptyResume = () => {
  return (
    <div className="flex max-h-screen md:h-full flex-col-reverse md:flex-row  overflow-hidden">
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={resume_image}
          alt="Resume illustration"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 p-8 md:p-12 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={itemVariants}
          className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center"
        >
          <FolderOpen
            size={32}
            className="text-secondary-foreground"
            aria-hidden
          />
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold">
          Let's take a look at your resume
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-sm text-sm md:text-base"
        >
          Upload it and we'll break down what's working, what's not, and how to
          make it stronger.
        </motion.p>

        <motion.div variants={itemVariants}>
          <UploadResume title="Upload your resume" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyResume;
