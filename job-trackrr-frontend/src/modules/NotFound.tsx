import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-md flex flex-col items-center justify-center"
      >
        <h1
          className="text-9xl font-light mx-auto text-primary"
          children={`404`}
        />
        <h1 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">
          Oops! Page not found.
        </h1>
        <h1 className="mt-4 mb-3">
          Looks like you hit a broken route. Or is in progress
        </h1>
        <h1 className="mb-2">Let’s get you back on track. </h1>

        <Button size={`lg`} onClick={() => navigate("/")}>
          <ArrowLeft />
          Go Home
        </Button>
      </motion.div>
    </div>
  );
}

export default NotFound;
