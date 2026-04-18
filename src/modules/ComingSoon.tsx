import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureInDevelopment = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/10 px-4">
            <div className="text-center max-w-md">

                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="p-5 rounded-full bg-yellow-100">
                        <Construction size={40} className="text-yellow-600 stroke-[1px]" />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Feature in Development
                </motion.h1>

                <motion.p
                    className="mb-6 text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    This feature is currently under construction. We’re working hard to
                    bring it to you soon. Stay tuned 🚀
                </motion.p>

                <motion.div
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Button size="lg" onClick={() => navigate(-1)}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>

                    <Button
                        size="lg"
                        variant="ghost"
                        onClick={() => navigate("/dashboard")}
                    >
                        Return to Dashboard
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default FeatureInDevelopment;