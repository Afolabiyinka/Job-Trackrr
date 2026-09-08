import { BarChart3, Plus } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import analytics_image from "@/assets/images/analytics_image.svg";
import CreateJobStepper from "../../jobs/components/create-job/stepper/CreateJob-Stepper";

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

const EmptyAnalytics = () => {
  return (
    <div className="flex max-h-screen md:h-full flex-col-reverse md:flex-row overflow-hidden">
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={analytics_image}
          alt="Analytics illustration"
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
          <BarChart3
            className="text-secondary-foreground stroke-[1.25px]"
            aria-hidden
            size={32}
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold font-heading"
        >
          Your analytics are waiting
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-sm text-sm md:text-base"
        >
          Add your first job application to start seeing your search progress,
          pipeline, and success rate.
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
};

export default EmptyAnalytics;
