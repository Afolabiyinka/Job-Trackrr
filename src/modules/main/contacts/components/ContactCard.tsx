import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone, Mail, Globe, Trash2, Pencil } from "lucide-react";
import type { ContactPayload } from "../types/types";
import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button";

const ContactCard = ({ contact }: { contact: ContactPayload }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-3 items-center hover:bg-primary/10 transition-colors p-3 rounded-2xl cursor-pointer border group">
          <div className="h-10 w-10 bg-primary/80  text-white flex items-center justify-center rounded-full font-bold border">
            {contact.name.substring(0, 2)}
          </div>

          <div className="flex flex-col items-start overflow-hidden">
            <p className="text-sm font-bold tracking-tight line-clamp-1">
              {contact.name}
            </p>
            <p className="text-muted-foreground text-xs truncate w-full">
              {contact.role}
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-primary/80 text-white flex items-center justify-center rounded-full font-bold border">
              {contact.name.substring(0, 2)}
            </div>
            <div>
              <DialogTitle className="text-xl">{contact.name}</DialogTitle>
              <DialogDescription>{contact.role}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid gap-4 py-4 border-t mt-4">
          {contact.phoneNumber && (
            <div className="flex items-center gap-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <span className="font-medium">Phone:</span>
                <span className="text-muted-foreground">
                  {contact.phoneNumber}
                </span>
              </div>

              <CopyButton value={String(contact.phoneNumber)} />
            </div>
          )}

          {contact.email && (
            <div className="flex items-center gap-3 text-sm">
              <div className="flex gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <span className="font-medium">Email:</span>
                <span className="text-muted-foreground">{contact.email}</span>
              </div>

              <CopyButton value={String(contact.email)} />
            </div>
          )}

          {contact.socialLinks.length > 0 && (
            <div className="space-y-2 mt-2">
              <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-2">
                {contact.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-full transition-colors border"
                  >
                    <Globe size={12} />
                    <span>Link {index + 1}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="destructive" size="lg">
            <Trash2 size={16} />
            Delete
          </Button>

          <Button variant="outline" size="lg">
            <Pencil size={16} />
            Edit Contact
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactCard;
