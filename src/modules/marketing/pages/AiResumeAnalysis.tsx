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
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Left: copy + CTA */}
      <div className="space-y-8 text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-extrabold leading-tight md:text-6xl"
        >
          Does your resume say what you actually did?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0"
        >
          Upload it and get a score, plus the exact lines to fix before you
          apply.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              Score my resume{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Right: insight cards */}
      <div className="flex flex-col gap-4">
        {insights.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="flex items-start gap-5 rounded-2xl border bg-muted p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Icon aria-hidden="true" className="h-6 w-6 stroke-[1.25px]" />
            </span>
            <div className="space-y-1">
              <h3 className="font-heading text-xl font-bold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AiResumeAnalysis;
