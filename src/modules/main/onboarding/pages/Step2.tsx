import { motion } from "framer-motion";
import type { StepProps } from "../types/onboarding.types";
import { useOnboardingStore } from "../store/useOnboardingDetails";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Step2 = ({ onNext }: StepProps) => {
    const { linkedinUrl, setLinkedInUrl } = useOnboardingStore();

    return (
        <motion.div
            className="w-full flex flex-col gap-10 justify-center items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Header */}
            <div className="space-y-6 max-w-3xl">
                <div className="space-y-1.5">
                    <motion.div
                        className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="w-4 h-px bg-muted-foreground/50" />
                        Step 2 of 4
                    </motion.div>

                    <motion.h1
                        className="text-2xl font-semibold tracking-tight"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        Build your profile
                    </motion.h1>

                    <motion.p
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Link your LinkedIn so we can personalize your job tracking experience.
                    </motion.p>
                </div>

                {/* Field */}
                <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <Label
                        htmlFor="linkedin-url"
                        className="text-sm font-medium flex items-center gap-1.5"
                    >
                        LinkedIn URL
                        <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>

                    <CustomInput
                        id="linkedin-url"
                        type="text"
                        value={linkedinUrl}
                        onChange={(e) => setLinkedInUrl(e)}
                        icon="Linkedin"
                        placeholder="https://linkedin.com/in/yourname"
                    />

                    <div className="flex justify-between mt-4" >
                        <Button variant={`secondary`} size={`lg`} onClick={onNext}>Skip</Button>
                        <Button size={`lg`} onClick={onNext}>Continue</Button>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default Step2;