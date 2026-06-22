import { Plus, BriefcaseBusiness } from "lucide-react";
import CreateJobStepper from "../../components/create-job/stepper/CreateJob-Stepper";
import { motion, type Variants } from "framer-motion";
import add_image from "@/assets/empty_jobs.svg";

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

export default function NoJobs() {
  return (
    <div className="flex max-h-screen md:h-full flex-col-reverse md:flex-row overflow-hidden">
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={add_image}
          alt="No jobs illustration"
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
          <BriefcaseBusiness
            className="text-secondary-foreground"
            aria-hidden
            size={32}
          />
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold">
          Your job board is empty{" "}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-sm text-sm md:text-base text-muted-foreground"
        >
          Drop in your first application and we'll help you keep tabs on every
          stage — from applied to offer.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <CreateJobStepper title="Add a new job" icon={<Plus />} />
        </motion.div>
      </motion.div>
    </div>
  );
}
