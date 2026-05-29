import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useUser } from "../../settings/store/useUser";
import WavingHand from "@/components/waving-hand";
import { Button } from "@/components/ui/button";
import type { StepProps } from "../types/onboarding.types";

const Step1 = ({ onNext }: StepProps) => {
    const { user } = useUser();

    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center">



            {/* Copy */}
            <motion.div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left justify-center">
                <motion.div
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest justify-center md:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                >
                    <span className="w-4 h-px bg-muted-foreground/50" />
                    Job Trackrr
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold flex items-center justify-center md:justify-start gap-2 flex-wrap"
                >
                    Welcome, {user?.username} <WavingHand />
                </motion.h1>

                <motion.p
                    className="text-sm md:text-base text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Every opportunity starts somewhere. Let&apos;s take a few minutes
                    to set up your profile so we can tailor your experience.
                </motion.p>

                <motion.div
                    className="flex justify-center md:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Button size="lg" onClick={onNext} className="gap-2">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Step1;