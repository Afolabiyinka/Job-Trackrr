import { CopyButton } from "@/components/ui/copy-button";
import { Mail, MoreHorizontal, Phone, User } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="grid p-4 w-64 rounded-xl h-48 border">
      <div className="border-b">
        <span className="flex justify-between items-center">
          <span className="flex">
            <User /> <p className="text-lg tracking-wide">Marcus Gold</p>
          </span>
          <div className="border rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
            <MoreHorizontal />
          </div>
        </span>
        <span className="border-b">
          <h3 className="text-lg">Ux Designer @ Meta</h3>
        </span>
      </div>
      <div className="p-2 flex  flex-col justify-between items-start">
        <span className="flex gap-2 items-center">
          <Mail size={20} color="gray" />{" "}
          <h2 className="text-md">MarcusGold@meta.com</h2>
        </span>
        <span className="flex gap-2 items-center w-full">
          <Phone size={20} color="gray" />{" "}
          <span className="flex justify-between items-center w-full">
            <h2 className="text-md">(212) 123-1234</h2>
            <CopyButton value="" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
