import { useEffect, useState } from "react";
import welcome_img from "@/assets/welcome.svg";

import { motion } from "framer-motion";
import { useUser } from "../../settings/store/useUser";
import WavingHand from "@/components/waving-hand";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CreateJobStepper from "../../jobs/components/create-job/stepper/CreateJob-Stepper";
const OnBoarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, 2));
  };

  const { user } = useUser();

  useEffect(() => {
    if (activeStep === 1) {
      localStorage.setItem("onboarded", "true");
    }
  }, [activeStep]);
  return (
    <div className="p-4 min-h-screen flex w-full">
      {/* First Step */}

      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={welcome_img} alt="Welcome" className="w-full md:w-1/2" />
      </motion.div>

      <div
        className="w-full md:w-1/2
      "
      >
        {activeStep === 0 && (
          <div className="h-full w-full flex flex-col md:flex-row  gap-10 p-2 px-4 md:px-10">
            <motion.div
              className="w-full  flex flex-col gap-6 text-center md:text-left justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
                Welcome {user?.username} <WavingHand />
              </h1>

              <p className="text-foreground tracking-widest text-sm md:text-xl">
                Every opportunity starts somewhere. Let’s take the first step by
                adding your first job application and building your
                journey.{" "}
              </p>

              <span className="">
                <Button size={`lg`} onClick={nextStep}>
                  Next
                  <ArrowRight />
                </Button>
              </span>
            </motion.div>
          </div>
        )}

        {activeStep === 1 && (
          <div className="h-full w-full flex flex-col md:flex-row  gap-10 p-2 px-4 md:px-10">
            <motion.div
              className="w-full  flex flex-col gap-6 text-center md:text-left justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Add your first job application
              </h2>

              <p className="text-foreground text-sm md:text-xl tracking-widest">
                Start tracking your opportunities by adding your first job.
                Include the company name, role, and status so you can stay
                organized from day one.
              </p>
              <CreateJobStepper title="Add your first job" />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnBoarding;
