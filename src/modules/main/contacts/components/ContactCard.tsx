import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Eye, Edit, Trash2 } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="grid p-4 w-64 rounded-xl border cursor-pointer">
      <div className="">
        <span className="flex justify-between items-center">
          <span className="flex items-center">
            <p className="text tracking-wide">Marcus Gold</p>
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Eye className=" h-4 w-4" /> View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="h-4 w-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash2 className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        <span>
          <h3 className="text-md text-muted-foreground">Ux Designer @ Meta</h3>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
