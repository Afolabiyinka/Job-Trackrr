import { motion } from "framer-motion";
import { features } from "../utils/features";

// Column spans on large screens (6 cards -> three full rows of 3 columns)
const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-2",
];

const Features = () => {
  return (
    <section className="w-full py-24 px-4 md:px-10">
      <div className="p-6 md:p-10 rounded-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold font-heading leading-tight"
            >
              Everything you need to land your dream job
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Powerful features designed to streamline your job search and
              increase your success rate.
            </motion.p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map(({ description, icon: Icon, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border bg-background p-8 min-h-[260px] flex flex-col justify-between transition-shadow hover:shadow-xl ${spans[i]}`}
              >
                {/* Big faded number */}
                <span className="absolute top-2 right-6 text-[5rem]  font-heading leading-none text-muted-foreground/10 select-none transition-transform duration-500 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative w-14 h-14 rounded-xl bg-muted flex items-center justify-center transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7 stroke-[1.25px]" />
                </div>

                <div className="relative space-y-2 pt-10">
                  <h3 className="text-xl md:text-2xl font-bold font-heading">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
