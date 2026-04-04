import { motion } from "framer-motion";
import contact_image from "@/assets/contact_image.svg";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const EmptyContacts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center py-10 h-full rounded-xl shadow border">
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={contact_image}
          alt="No contacts illustration"
          className="w-full max-w-sm object-contain"
        />
      </motion.div>

      {/* Text */}
      <motion.div>
        <motion.h2
          className="text-xl font-semibold mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          No Contacts Yet
        </motion.h2>

        <motion.p
          className="text-muted-foreground mt-2 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Start building your network by adding your first contact.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button size={`lg`}>
            <Plus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyContacts;
