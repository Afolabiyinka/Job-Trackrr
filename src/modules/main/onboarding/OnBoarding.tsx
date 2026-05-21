import { useEffect, useRef, useState } from "react";
import welcome_img from "@/assets/welcome.svg";
import add_img from "@/assets/add.svg";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import WavingHand from "@/components/waving-hand";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { useWindowSize } from "react-use";
import { useUser } from "../settings/store/useUser";
import CreateJobStepper from "../jobs/components/create-job/stepper/CreateJob-Stepper";
import { Navigate } from "react-router-dom";
import { useEditUser } from "../settings/hooks/useEditUser";

const OnBoarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const { height, width } = useWindowSize();
  const { user } = useUser();
  const { handleEdit, setEditData, } = useEditUser();

  const hasMarkedRef = useRef(false);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeStep === 1 && !hasMarkedRef.current) {
      hasMarkedRef.current = true;

      setEditData((prev) => ({
        ...prev,
        onboarded: true,
      }));

      handleEdit();
    }
  }, [activeStep]);

  if (user?.onboarded) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div className="p-4 min-h-screen flex w-full">
      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          gravity={0.3}
          recycle={false}
          width={width}
          height={height}
        />
      )}

      {/* Step 0: Welcome */}
      {activeStep === 0 && (
        <div className="w-full h-full flex flex-col md:flex-row shadow rounded-2xl gap-10 p-2 px-4 md:px-10">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={welcome_img}
              alt="Welcome"
              className="w-full md:w-1/2"
            />
          </motion.div>

          <motion.div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold flex items-center gap-2"
            >
              Welcome {user?.username} <WavingHand />
            </motion.h1>

            <motion.p
              className="tracking-widest text-sm md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Every opportunity starts somewhere. Let's take the first step by
              adding your first job application and building your journey.
            </motion.p>

            <span className="flex">
              <Button size="lg" onClick={nextStep}>
                Get Started
                <ArrowRight />
              </Button>
            </span>
          </motion.div>
        </div>
      )}

      {/* Step 1: Add First Job */}
      {activeStep === 1 && (
        <div className="w-full h-full flex flex-col md:flex-row shadow rounded-2xl gap-10 p-2 px-4 md:px-10">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={add_img} alt="Add job" className="w-full md:w-1/2" />
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left justify-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Add your first job application
            </motion.h2>

            <motion.p
              className="text-sm md:text-xl tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Start tracking your opportunities by adding your first job.
              Include the company name, role, and status so you can stay
              organized from day one.
            </motion.p>

            <CreateJobStepper title="Add your first job" icon={<Plus />} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OnBoarding;