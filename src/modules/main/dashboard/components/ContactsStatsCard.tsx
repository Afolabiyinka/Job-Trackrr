import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactCard from "../../contacts/components/ContactCard";
import { MOCK_CONTACTS } from "../../contacts/libs/mockContacts";

const ContactsStatsCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-full  ring-0 shadow-none">
      <CardHeader>
        <CardTitle>Manage Contacts</CardTitle>
        <CardDescription>
          You have 120 contacts saved on your account
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Button size={`lg`} onClick={() => navigate("/contacts")}>
          <User />
          Manage Contacts
        </Button>
        <div className="grid grid-flow-col-dense gap-5 mt-3 overflow-x-scroll ">
          {MOCK_CONTACTS.slice(0, 3).map((contact, i) => (
            <ContactCard key={i} contact={contact} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactsStatsCard;
