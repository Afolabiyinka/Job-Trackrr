import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertTriangle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "Your strengths",
    description:
      "See which achievements, skills, and sections are already working well.",
    icon: CheckCircle,
  },
  {
    title: "Areas to improve",
    description:
      "Spot vague phrasing, missing impact, and details that could be clearer.",
    icon: AlertTriangle,
  },
  {
    title: "Practical suggestions",
    description:
      "Get focused recommendations to make your experience easier to understand.",
    icon: Wrench,
  },
];

const AiResumeAnalysis = () => (
  <section className="w-full px-4 py-24 md:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 space-y-10">
      <div className="max-w-3xl space-y-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-extrabold leading-tight md:text-6xl"
        >
          Make your resume work harder
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Get a clear score and useful feedback to help strengthen your next
          application.
        </motion.p>
      </div>

      <div className="grid w-full gap-10 md:grid-cols-3 md:gap-8">
        {insights.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div className="space-y-2">
              <h3 className="font-heading text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Link to="/signup">
        <Button size="lg" className="gap-2">
          Analyze your resume
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  </section>
);

export default AiResumeAnalysis;
