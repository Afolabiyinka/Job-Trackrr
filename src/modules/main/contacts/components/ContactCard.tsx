import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Phone, Mail, MoreHorizontal, icons } from "lucide-react";
import type { ContactPayload } from "../types/contact.types";
import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteContact } from "../hooks/useDeleteContacts";
import AddContact from "./AddContact";
import SpinningLoader from "@/components/loader/spinningloader";
import { getSocialIcon } from "../utils/getSocialIcon";

const ContactCard = ({ contact }: { contact: ContactPayload }) => {
  const { handleDelete, isPending } = useDeleteContact({
    id: contact.id ?? "",
  });

  if (!contact.id) return null;

  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="group flex cursor-pointer items-center  gap-3 rounded-4xl bg-muted/50 p-3.5 px-10 transition-all hover:bg-muted hover:shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/80 font-semibold text-white">
            {initials}
          </div>

          <div className="flex min-w-0 flex-col">
            <p className="truncate text-sm font-semibold">{contact.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {contact.role}
            </p>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent align="start" sideOffset={8} className="w-80 p-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/90 font-semibold text-white">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold leading-tight">
                {contact.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {contact.role}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-muted-foreground"
                aria-label="More actions"
              >
                <MoreHorizontal size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="space-y-2 w-fit p-2 flex flex-col"
            >
              <AddContact
                title="Edit"
                editing
                id={contact.id}
                contact={contact}
              />
              <Button
                variant={`destructive`}
                size={`sm`}
                onClick={() => handleDelete()}
                disabled={isPending}
              >
                {" "}
                {isPending ? <SpinningLoader /> : "Delete"}
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Details */}
        {(contact.phoneNumber || contact.email) && (
          <div className="space-y-2 border-t px-5 py-4">
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
                  <span className="truncate">{contact.email}</span>
                </div>
                <CopyButton value={String(contact.email)} />
              </div>
            )}
          </div>
        )}

        {/* Socials */}
        <div className="flex gap-3 p-2">
          {contact.socialLinks.map((link, index) => {
            const Icon = icons[getSocialIcon(link)];
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-muted px-5 p-2.5 text-xs transition hover:bg-muted/80"
                  >
                    <Icon size={12} />
                    Open
                  </a>
                </TooltipTrigger>
                <TooltipContent>{link}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactCard;
