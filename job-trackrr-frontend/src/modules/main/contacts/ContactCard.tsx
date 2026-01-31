import { Mail, MoreHorizontal, Phone, User } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="grid p-3 w-64 rounded-xl h-64 border">
      <div>
        <span className="flex justify-between items-center ">
          <span className="flex mb-1">
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
      <div>
        <span className="flex gap-2 items-center">
          <Mail /> <h2 className="text-lg">MarcusGold@meta.com</h2>
        </span>
        <span className="flex gap-2 items-center">
          <Phone /> <h2 className="text-lg">(212)123-1234</h2>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
