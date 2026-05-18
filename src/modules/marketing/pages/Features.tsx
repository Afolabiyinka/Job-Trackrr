import FeaturesCard from "../components/FeaturesCard";
import { features } from "../utils/features";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="w-full py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

        {/* Heading */}
        <div className="text-center max-w-3xl space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold leading-tight font-[Inter]"
          >
            Everything you need to land your dream job
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Powerful features designed to streamline your job search and
            increase your success rate.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {features.map(({ description, icon, title }, i) => (

            <FeaturesCard
              icon={icon}
              desc={description}
              title={title}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;