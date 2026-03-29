import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Plus, Upload } from "lucide-react";
import CreateJobStepper from "../../jobs/components/create-job/stepper/CreateJob-Stepper";

const Reminder = () => {
  return (
    <Dialog open>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DialogContent>
        <motion.div className="w-full  flex flex-col gap-6 text-center md:text-left justify-center">
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
              Add your first job application to start tracking your job search
              in one place.
            </motion.p>

            <div className="flex justify-center gap-2 mt-4">
              <CreateJobStepper title="Add a new job" icon={<Plus />} />
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default Reminder;
