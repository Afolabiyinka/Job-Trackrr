import { motion } from "framer-motion";
import resume_image from "@/assets/resume_image.svg";

import { Upload } from "lucide-react";
import UploadResume from "../../components/UploadResume";
import { Button } from "@/components/ui/button";

const EmptyResume = () => {
  return (
    <div className="w-full h-full border flex flex-col lg:flex-row shadow rounded-2xl p-6 gap-6">
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={resume_image}
          alt="Resume illustration"
          className="w-full max-w-md object-contain"
        />
      </motion.div>
      <motion.div className="w-full lg:w-1/2 flex flex-col gap-6 text-center md:text-left justify-center">
        <div className="h-full w-full flex flex-col justify-center items-center p-6 text-center rounded-xl transition">
          <Button
            size={`icon-lg`}
            variant={`secondary`}
            className="h-16 w-16 rounded-full"
          >
            <Upload aria-hidden className="h-10 w-10" />
          </Button>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-semibold mt-4"
          >
            No resume yet
          </motion.h2>

          <motion.p
            className="max-w-sm text-sm md:text-base  mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Upload your resume to see how it performs and get tips to make it
            better.
          </motion.p>

          <div className="flex justify-center gap-2 mt-4">
            <UploadResume title="Upload Resume" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default EmptyResume;
