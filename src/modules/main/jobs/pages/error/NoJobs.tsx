import { Plus, Upload } from "lucide-react";
import CreateJobStepper from "../../components/create-job/stepper/CreateJob-Stepper";
import { motion } from "framer-motion";
import add_image from "@/assets/add_image.svg";
import { Button } from "@/components/ui/button";
export default function NoJobs() {
  return (
    <div className="flex h-full flex-col md:flex-row shadow rounded-2xl">
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={add_image}
          alt="No contacts illustration"
          className="w-full max-w-sm object-contain"
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
            No Jobs Added Yet
          </motion.h2>

          <motion.p
            className="max-w-sm text-sm md:text-base  mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Add your first job application to start tracking your job search in
            one place.
          </motion.p>

          <div className="flex justify-center gap-2 mt-4">
            <CreateJobStepper title="Add a new job" icon={<Plus />} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
