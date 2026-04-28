import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Phone, Mail, Globe, Loader2 } from "lucide-react";
import type { ContactPayload } from "../types/types";
import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDeleteContact } from "../hooks/useDeleteContacts";
import AddContact from "./AddContact";

const ContactCard = ({ contact }: { contact: ContactPayload }) => {
  if (!contact.id) return null;
  const { handleDelete, isPending } = useDeleteContact({ id: contact.id }); return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex gap-3 items-center p-3 rounded-full border bg-background hover:bg-muted/60 transition-all cursor-pointer hover:shadow-sm">

          {/* Avatar */}
          <div className="h-10 w-10 bg-primary/90 text-white flex items-center justify-center rounded-full font-semibold">
            {contact.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>

          {/* Info */}
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold truncate">
              {contact.name}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {contact.role}
            </p>
          </div>
        </div>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent side="right" className="w-95 sm:w-105 p-0 flex flex-col">

        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-primary/90 text-white flex items-center justify-center rounded-full font-semibold">
              {contact.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>

            <div>
              <SheetTitle className="text-lg font-semibold">
                {contact.name}
              </SheetTitle>
              <p className="text-sm text-muted-foreground">
                {contact.role}
              </p>
            </div>
          </div>
        </SheetHeader>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

          {/* Contact Info */}
          <div className="space-y-3">
            {contact.phoneNumber && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>{contact.phoneNumber}</span>
                </div>
                <CopyButton value={String(contact.phoneNumber)} />
              </div>
            )}

            {contact.email && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>{contact.email}</span>
                </div>
                <CopyButton value={String(contact.email)} />
              </div>
            )}
          </div>

          {/* Socials */}
          {contact.socialLinks.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                Socials
              </p>

              <div className="flex flex-wrap gap-2">
                {contact.socialLinks.map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition"
                      >
                        <Globe size={12} />
                        Open
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{link}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <SheetFooter className="px-6 py-4 border-t flex justify-between">

          <AddContact title="Edit" editing id={contact.id} />

          <Button variant="destructive" size="lg" onClick={() => handleDelete()}>
            {isPending ? <Loader2 className="animate-spin" /> : " Delete"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ContactCard;
