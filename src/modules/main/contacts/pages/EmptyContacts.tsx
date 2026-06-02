import { motion } from "framer-motion";
import contact_image from "@/assets/contact_image.svg";
import AddContact from "../components/AddContact";

const EmptyContacts = () => {
  return (
    <div className="flex max-h-screen md:h-full flex-col md:flex-row shadow rounded-2xl bg-muted/50 overflow-hidden">
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
          className="w-full max-w-xs md:max-w-sm object-contain"
        />
      </motion.div>

      {/* Content panel */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 p-8 md:p-12 text-center md:text-left"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          No Contacts Yet
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-sm text-sm md:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Start building your network by adding your first contact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <AddContact title="Add Contact" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyContacts;