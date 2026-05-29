import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Navigate } from "react-router-dom";

import { useUser } from "../settings/store/useUser";

import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";

const OnBoarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const { height, width } = useWindowSize();
  const { user } = useUser();


  const hasMarkedRef = useRef(false);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };



  useEffect(() => {
    setShowConfetti(true);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);



  if (user?.onboarded) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="p-4 h-screen flex w-full">
      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          gravity={0.3}
          recycle={false}
          width={width}
          height={height}
        />
      )}

      {activeStep === 0 && (
        <Step1 onNext={nextStep} />
      )}

      {activeStep === 1 && (
        <Step2
          onNext={nextStep}
        />
      )}

      {activeStep === 2 && (
        <Step3 onNext={nextStep}
        />
      )}
      {activeStep === 3 && (
        <Step4
        />
      )}
    </div>
  );
};

export default OnBoarding;
