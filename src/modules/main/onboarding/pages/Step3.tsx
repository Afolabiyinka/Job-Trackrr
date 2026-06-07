import { motion } from "framer-motion";
import { useOnboardingStore } from "../store/useOnboardingDetails";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { Label } from "@/components/ui/label";
import type { StepProps } from "../types/onboarding.types";
import { Button } from "@/components/ui/button";

const Step3 = ({ onNext }: StepProps) => {
  const { setPreferredRole, preferredRole } = useOnboardingStore();

  return (
    <motion.div
      className="w-full flex flex-col gap-10 justify-center items-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div>
        <div className="space-y-1.5">
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-4 h-px bg-muted-foreground/50" />
            Step 3 of 4
          </motion.div>

          <motion.h1
            className="text-2xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            What role are you targeting?
          </motion.h1>

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We'll use this to surface relevant insights across your
            applications.
          </motion.p>
        </div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Label htmlFor="preferred-role" className="text-sm font-medium">
            Preferred Role
          </Label>

          <CustomInput
            id="preferred-role"
            icon="User"
            type="text"
            value={preferredRole}
            onChange={(e) => setPreferredRole(e)}
            placeholder="e.g. Frontend Developer, Product Designer"
          />

          <p className="text-xs text-muted-foreground pl-0.5">
            You can always update this later in your settings.
          </p>
        </motion.div>
        <div className="flex justify-between mt-4">
          <Button variant={`secondary`} size={`lg`} onClick={onNext}>
            Skip
          </Button>
          <Button size={`lg`} onClick={onNext}>
            Continue
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Step3;
