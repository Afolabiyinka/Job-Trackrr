import {
  RiUserAddLine,
  RiFileSearchLine,
  RiBarChartBoxLine,
} from "@remixicon/react";
import { motion } from "motion/react"

const steps = [
  {
    title: "Create an account",
    description: "Sign up in seconds and set up your job search profile.",
    icon: RiUserAddLine,
  },
  {
    title: "Track applications",
    description: "Add and organize every job you apply to in one place.",
    icon: RiFileSearchLine,
  },
  {
    title: "Analyze progress",
    description: "Get insights on your job search performance and improve faster.",
    icon: RiBarChartBoxLine,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h2 className="text-3xl md:text-5xl font-bold">
          How It Works
        </motion.h2>
        <p className="text-muted-foreground mt-3">
          A simple workflow to manage your job search efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            className="border rounded-xl p-6 flex flex-col items-start gap-2 hover:shadow-md transition"
          >
            <Icon className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground  leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;