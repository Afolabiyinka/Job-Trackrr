import { Plus, BriefcaseBusiness } from "lucide-react";
import CreateJobStepper from "../../components/create-job/stepper/CreateJob-Stepper";
import { motion } from "framer-motion";
import add_image from "@/assets/empty_jobs.svg";

export default function NoJobs() {
  return (
    <div className="flex max-h-screen md:h-full flex-col md:flex-row shadow rounded-2xl bg-muted/50 overflow-hidden">
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={add_image}
          alt="No jobs illustration"
          className="w-full max-w-xs md:max-w-sm object-contain"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 p-8 md:p-12 text-center md:text-left"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="h-20 w-20 rounded-lg flex items-center justify-center">
          <BriefcaseBusiness
            className=" text-secondary-foreground"
            aria-hidden
            size={40}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-2xl font-semibold"
        >
          No Jobs Added Yet
        </motion.h2>

        <motion.p
          className="max-w-sm text-sm md:text-base text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Add your first job application to start tracking your search in one
          place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <CreateJobStepper title="Add a new job" icon={<Plus />} />
        </motion.div>
      </motion.div>
    </div>
  );
}
