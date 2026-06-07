import { motion } from "framer-motion";
import resume_image from "@/assets/resume_image.svg";
import { Upload } from "lucide-react";
import UploadResume from "../../components/UploadResume";

const EmptyResume = () => {
  return (
    <div className="flex max-h-screen md:h-full flex-col md:flex-row shadow rounded-2xl bg-muted/50 overflow-hidden">
      {/* Illustration panel */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={resume_image}
          alt="Resume illustration"
          className="w-full max-w-xs md:max-w-sm object-contain"
        />
      </motion.div>

      {/* Content panel */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 p-8 md:p-12 text-center md:text-left"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="h-20 w-20 rounded-full flex items-center justify-center">
          <Upload size={40} className="text-secondary-foreground" aria-hidden />
        </div>

        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          No Resume Yet
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-sm text-sm md:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Upload your resume to see how it performs and get tips to make it
          better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <UploadResume title="Upload Resume" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyResume;