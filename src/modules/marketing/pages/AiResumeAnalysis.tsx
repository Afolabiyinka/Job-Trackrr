import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertTriangle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "What's working",
    description:
      "We point out the bullets and skills that already land with recruiters.",
    icon: CheckCircle,
  },
  {
    title: "What's holding you back",
    description:
      "Vague bullets, missing numbers, and sections that get skimmed past.",
    icon: AlertTriangle,
  },
  {
    title: "How to fix it",
    description:
      "Line-by-line rewrites you can paste straight into your resume.",
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
          Does your resume say what you actually did?{" "}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Upload it and get a score, plus the exact lines to fix before you
          apply.
        </motion.p>
      </div>

      <div className="flex flex-col w-full gap-10 md:gap-8 max-w-2xl">
        {insights.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="flex items-center gap-4 text-center border p-2 rounded-2xl bg-muted"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div className="w-full flex items-start justify-start flex-col">
              <h3 className="font-heading text-xl font-bold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Link to="/signup">
        <Button size="lg" className="gap-2">
          Score my resume <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  </section>
);

export default AiResumeAnalysis;
