import { MoreHorizontal } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="grid p-4 w-64 rounded-xl border cursor-pointer">
      <div className="">
        <span className="flex justify-between items-center">
          <span className="flex items-center">
            <p className="text tracking-wide">Marcus Gold</p>
          </span>
          <MoreHorizontal />
        </span>
        <span>
          <h3 className="text-md text-muted-foreground">Ux Designer @ Meta</h3>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
