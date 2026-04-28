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
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { Loader2, Pencil, Plus, } from "lucide-react";
import { useAddContact } from "../hooks/useAddContact";
import { useEffect } from "react";
import type { ContactPayload } from "../types/types";
import { useEditContact } from "../hooks/useEditContact";
import { useGetContacts } from "../hooks/useGetContacts";


interface AddContactProps {
    editing?: boolean,
    title: string,
    id?: number | string

}
const AddContact = ({ editing, title, id }: AddContactProps) => {
    const { contactData, isPending, mutate, setContactData } = useAddContact()
    const { handleEdit, loading: isEditPending } = useEditContact()
    const { contacts } = useGetContacts()

    const contact = contacts?.find((contact: ContactPayload) => contact.id === id);


    useEffect(() => {
        if (editing && contact) {
            setContactData(contact);
        }
    }, [editing, contact, setContactData]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="gap-2" variant={editing ? "outline" : "default"}>
                    {editing ? <Pencil size={16} /> : <Plus size={16} />}
                    {title}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md  h-[80%] p-0 overflow-y-scroll rounded-2xl">

                {/* Header */}
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                    <DialogTitle>
                        {editing ? "Edit Contact" : "Add New Contact"}
                    </DialogTitle>
                    <DialogDescription>
                        {editing
                            ? "Update this contact’s details below"
                            : "Save a new person to your network"}
                    </DialogDescription>
                </DialogHeader>

                {/* Form */}
                <form className="px-6 py-5 space-y-5" onSubmit={async (e) => {
                    e.preventDefault()

                    if (editing && id) {
                        await handleEdit({ id, payload: contactData })
                        return
                    }

                    mutate(contactData)
                }}>

                    {/* Name */}
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                            Name
                        </Label>
                        <CustomInput
                            placeholder="John Doe"
                            icon="User"
                            type="text"
                            value={contactData?.name}
                            onChange={(e) => setContactData({ ...contactData, name: e })}
                        />
                    </div>

                    {/* Role */}
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                            Role
                        </Label>
                        <CustomInput
                            placeholder="Product Designer"
                            icon="User"
                            type="text"
                            value={contactData?.role}
                            onChange={(e) => setContactData({ ...contactData, role: e })}
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                            Email
                        </Label>
                        <CustomInput
                            type="email"
                            placeholder="john@email.com"
                            icon="Mail"
                            value={contactData.email}
                            onChange={(e) => setContactData({ ...contactData, email: e })}
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                            Phone
                        </Label>
                        <CustomInput
                            placeholder="+234..."
                            icon="Phone"
                            type="number"
                            value={contactData.phoneNumber}
                            onChange={(e) => setContactData({ ...contactData, phoneNumber: e })}
                        />
                    </div>

                    {/* Social */}
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                            Social link
                        </Label>
                        <CustomInput
                            placeholder="https://linkedin.com/in/..."
                            icon="Link"
                            type="text"

                        />
                    </div>
                    <div className="px-6 py-4 border-t flex justify-end">
                        {editing ? (
                            <Button size="lg" type="submit">
                                {isEditPending ? <Loader2 className="animate-spin" /> : "Save Changes"}
                            </Button>
                        ) : (
                            <Button className="gap-2" size="lg" type="submit">
                                {isPending ? <Loader2 className="animate-spin" /> : "Save Contact"}
                            </Button>
                        )}
                    </div>
                </form>


            </DialogContent>
        </Dialog>
    );
};

export default AddContact;