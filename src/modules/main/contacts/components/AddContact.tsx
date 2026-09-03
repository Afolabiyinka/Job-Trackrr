import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Briefcase, Globe, Mail, Pencil, Plus, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import SpinningLoader from "@/components/loader/spinningloader";
import CustomInput from "../../jobs/components/create-job/input/custom-input";

import { useAddContact } from "../hooks/useAddContact";
import { useEditContact } from "../hooks/useEditContact";
import { contactSchema } from "../services/contacts.schema";
import type { ContactPayload } from "../types/contact.types";
import { getSocialIcon } from "../utils/getSocialIcon";

type ContactFormInput = z.input<typeof contactSchema>;
type ContactFormData = z.output<typeof contactSchema>;

interface AddContactProps {
  editing?: boolean;
  title: string;
  id?: number | string;
  contact?: ContactPayload;
}

const AddContact = ({ editing, title, id, contact }: AddContactProps) => {
  const { contactData, isPending, mutate, setContactData } = useAddContact();
  const { handleEdit, loading: isEditPending } = useEditContact();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phoneNumber: "",
      socialLinks: [],
    },
  });

  useEffect(() => {
    if (!editing || !contact) return;

    const values: ContactFormData = {
      name: contact.name ?? "",
      role: contact.role ?? "",
      email: contact.email ?? "",
      phoneNumber: String(contact.phoneNumber ?? ""),
      socialLinks: contact.socialLinks ?? [],
    };

    setContactData({ ...contact, ...values });

    Object.entries(values).forEach(([field, value]) => {
      setValue(field as keyof ContactFormData, value, {
        shouldValidate: false,
      });
    });
  }, [contact, editing, setContactData, setValue]);

  const socialLinks = contactData.socialLinks?.length
    ? contactData.socialLinks
    : [""];

  const updateField = (field: keyof ContactFormData, value: string) => {
    setContactData({ ...contactData, [field]: value });
    setValue(field, value, { shouldValidate: true, shouldDirty: true });
  };

  const updateSocialLink = (index: number, value: string) => {
    const next = [...socialLinks];
    next[index] = value;
    setContactData({ ...contactData, socialLinks: next });
    setValue("socialLinks", next, { shouldValidate: true, shouldDirty: true });
  };

  const removeSocialLink = (index: number) => {
    const next = socialLinks.filter((_, i) => i !== index);
    setContactData({ ...contactData, socialLinks: next });
    setValue("socialLinks", next, { shouldValidate: true, shouldDirty: true });
  };

  const addSocialLink = () => {
    const next = [...socialLinks, ""];
    setContactData({ ...contactData, socialLinks: next });
    setValue("socialLinks", next, { shouldDirty: true });
  };

  const submitContact = async (data: ContactFormData) => {
    const payload = {
      ...data,
      socialLinks: data.socialLinks.filter((link) => link.trim()),
    };

    if (editing && id) {
      await handleEdit({ id, payload });
      return;
    }

    mutate(payload);
  };

  const initials = (contactData.name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={editing ? "sm" : "lg"}
          variant={editing ? "secondary" : "default"}
        >
          {editing ? <Pencil size={4} /> : <Plus size={15} />}
          <span>{title}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="flex max-h-[90vh] sm:min-w-xl flex-col overflow-hidden rounded-2xl border p-0 shadow-2xl">
        <DialogHeader className="border-b px-7 py-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {contactData.name ? (
                initials
              ) : (
                <User size={18} className="text-muted-foreground" />
              )}
            </div>

            <div className="min-w-0 text-left">
              <DialogTitle className="text-[16px] font-semibold tracking-[-0.01em]">
                {editing ? "Edit contact" : "Add contact"}
              </DialogTitle>
              <DialogDescription className="mt-0.5 text-[13px] text-muted-foreground">
                {editing
                  ? "Update this person's details."
                  : "Add someone to your professional network."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(submitContact)}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="min-h-0 flex-1 overflow-y-auto px-7 py-6">
            <div className="space-y-6">
              {/* Basic information */}
              <section className="space-y-3.5">
                <SectionLabel icon={User} label="Basic information" />

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-xs font-medium"
                    >
                      Name
                    </Label>
                    <CustomInput
                      id="contact-name"
                      value={contactData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="John Doe"
                      icon="User"
                      type="text"
                      error={errors.name?.message}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-role"
                      className="text-xs font-medium"
                    >
                      Role{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </Label>
                    <CustomInput
                      id="contact-role"
                      value={contactData.role ?? ""}
                      onChange={(e) => updateField("role", e.target.value)}
                      placeholder="Product Designer"
                      icon="User"
                      type="text"
                      error={errors.role?.message}
                    />
                  </div>
                </div>
              </section>

              {/* Contact information */}
              <section className="space-y-3.5 border-t pt-6">
                <SectionLabel icon={Mail} label="Contact information" />

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="text-xs font-medium"
                    >
                      Email{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </Label>
                    <CustomInput
                      id="contact-email"
                      type="email"
                      placeholder="john@email.com"
                      icon="Mail"
                      value={contactData.email ?? ""}
                      onChange={(e) => updateField("email", e.target.value)}
                      error={errors.email?.message}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-phone"
                      className="text-xs font-medium"
                    >
                      Phone{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </Label>
                    <CustomInput
                      id="contact-phone"
                      placeholder="+234..."
                      icon="Phone"
                      type="tel"
                      value={contactData.phoneNumber ?? ""}
                      onChange={(e) =>
                        updateField("phoneNumber", e.target.value)
                      }
                      error={errors.phoneNumber?.message}
                    />
                  </div>
                </div>
              </section>

              {/* Social profiles */}
              <section className="space-y-3.5 border-t pt-6">
                <div className="flex items-center justify-between">
                  <SectionLabel icon={Globe} label="Social profiles" />
                  <button
                    type="button"
                    onClick={addSocialLink}
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    <Plus size={13} />
                    Add link
                  </button>
                </div>

                <div className="space-y-2">
                  {socialLinks.map((link, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <CustomInput
                          icon={getSocialIcon(link)}
                          placeholder="https://linkedin.com/in/..."
                          type="url"
                          value={link}
                          onChange={(e) =>
                            updateSocialLink(index, e.target.value)
                          }
                          error={errors.socialLinks?.[index]?.message}
                          className="pl-9"
                        />

                        {socialLinks.length > 1 && (
                          <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            aria-label="Remove social link"
                            onClick={() => removeSocialLink(index)}
                          >
                            <X size={15} />
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="flex shrink-0 items-center justify-end gap-2 border-t bg-muted/30 p-3">
            <Button type="button" variant="ghost" size="lg">
              Cancel
            </Button>

            <Button
              size="lg"
              type="submit"
              disabled={isPending || isEditPending}
            >
              {isPending || isEditPending ? (
                <SpinningLoader />
              ) : editing ? (
                <>
                  <Pencil size={13} />
                  Save changes
                </>
              ) : (
                <>
                  <Briefcase size={13} />
                  Add contact
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const SectionLabel = ({
  icon: Icon,
  label,
}: {
  icon: typeof User;
  label: string;
}) => (
  <div className="flex items-center gap-1.5 text-[13px] font-medium text-foreground">
    <Icon size={13} className="text-muted-foreground" />
    {label}
  </div>
);

export default AddContact;
