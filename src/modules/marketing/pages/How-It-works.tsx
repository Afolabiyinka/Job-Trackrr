import { Button } from "@/components/ui/button";

import { User, Search, ChartBar } from "lucide-react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Create an account",
    description: "Sign up in seconds and set up your job search profile. No credit card required.",
    icon: User,
  },
  {
    step: "02",
    title: "Track applications",
    description: "Add and organize every job you apply to in one place. Drag and drop between stages.",
    icon: Search,
  },
  {
    step: "03",
    title: "Analyze progress",
    description: "Get insights on your job search performance and improve faster with AI-powered suggestions.",
    icon: ChartBar,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 px-6 md:px-16 bg-muted/30">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Inter]"
          >
            How it works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Get started with JobTrackrr in three simple steps. From signup to insights in minutes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">

          {steps.map(({ step, title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-muted/50 z-50 border rounded-2xl p-8 flex flex-col items-start gap-4 transition-all duration-300 h-full group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step}
                </div>

                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to take control of your job search?
          </p>
          <Link to="/signup">

            <Button
              size={`lg`}
            >
              Get started now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;