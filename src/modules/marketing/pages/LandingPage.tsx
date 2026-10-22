import Features from "./Features";
import Home from "./Home";
import HowItWorks from "./How-It-works";
import About from "./Testimonials";
import AiResumeAnalysis from "./AiResumeAnalysis";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Features />
      <AiResumeAnalysis />
      <HowItWorks />
      <About />
    </>
  );
};

export default LandingPage;
