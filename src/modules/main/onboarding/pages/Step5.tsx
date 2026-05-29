import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import CreateJobStepper from "../../jobs/components/create-job/stepper/CreateJob-Stepper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
    const navigate = useNavigate()
    return (
        <motion.div
            className="w-full h-full flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >


            {/* Copy + CTA */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left justify-center">
                <motion.div
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest justify-center md:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                >
                    <span className="w-4 h-px bg-muted-foreground/50" />
                    Step 4 of 4
                </motion.div>

                <motion.h1
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Add your first job application
                </motion.h1>

                <motion.p
                    className="text-sm md:text-base text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Start tracking your opportunities by adding your first job.
                    Include the company name, role, and status so you can stay
                    organized from day one.
                </motion.p>

                <motion.div
                    className="flex space-x-6 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <CreateJobStepper title="Add your first job" icon={<Plus />} />
                    <Button variant={`ghost`} size={`lg`} onClick={() => navigate("/dashboard")}>Skip</Button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Step5;