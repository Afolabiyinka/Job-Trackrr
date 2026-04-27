import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { Plus } from "lucide-react";

const AddContact = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={`lg`}>
                    <Plus />Add Contact</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add New Contact</DialogTitle>
                </DialogHeader>

                <form className="space-y-4 mt-4">
                    <div className="space-y-1">
                        <Label>Name</Label>
                        <CustomInput placeholder="Enter name" icon="User" type="text" />
                    </div>

                    <div className="space-y-1">
                        <Label>Role</Label>
                        <CustomInput placeholder="e.g. Product Designer" icon="User" type="text" />
                    </div>

                    <div className="space-y-1">
                        <Label>Email</Label>
                        <CustomInput type="email" placeholder="example@mail.com" icon="Mail" />
                    </div>

                    <div className="space-y-1">
                        <Label>Phone Number</Label>
                        <CustomInput placeholder="+234..." icon="Phone" type="number" />
                    </div>

                    <div className="space-y-1">
                        <Label>Social Links</Label>
                        <CustomInput placeholder="LinkedIn, Twitter, GitHub..." icon="Link" type="text" />
                    </div>

                    <Button type="button" className="w-full" size={`lg`}>
                        Save Contact
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddContact;  