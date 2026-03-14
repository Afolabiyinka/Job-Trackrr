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
      className="p-4 rounded-xl flex justify-center items-center gap-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <span className="flex justify-center items-center w-16 h-16 rounded-full ">
        <Icon className="text-primary stroke-[1px]" size={35} />
      </span>
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
