import { Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import contact_image from "@/assets/contact_image.svg";
import AddContact from "../components/AddContact";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const EmptyContacts = () => {
  return (
    <div className="flex max-h-screen md:h-full flex-col-reverse md:flex-row overflow-hidden">
      {/* Illustration panel */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={contact_image}
          alt="No contacts illustration"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
        />
      </motion.div>

      {/* Content panel */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 p-8 md:p-12 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={itemVariants}
          className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center"
        >
          <Users className="text-secondary-foreground" aria-hidden size={32} />
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold">
          No one here yet{" "}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-sm text-sm md:text-base"
        >
          Save the recruiters, referrals, and hiring managers you talk to — so
          you're never scrambling for a name before a call.{" "}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <AddContact title="Add a new Contact" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyContacts;
