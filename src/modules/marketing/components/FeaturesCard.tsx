import type { LucideProps } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  desc: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}
const FeaturesCard = ({ desc, icon: Icon, title }: Props) => {
  return (
    <motion.div
      className="p-6 border rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <span className="shadow flex justify-center items-center w-12.5 h-12.5 rounded-full">
        <Icon className="text-primary stroke-[1px]" size={30} />
      </span>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </motion.div>
  );
};

export default FeaturesCard;
