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
import { useGetContacts } from "../../contacts/hooks/useGetContacts";

const ContactsStatsCard = () => {
  const navigate = useNavigate();
  const { contacts } = useGetContacts();

  const count = contacts.length || (contacts.length === 0 && "no");
  const label = count === 1 ? "Contact" : "Contacts";

  return (
    <Card className="w-full ring-0 shadow-none">
      <CardHeader>
        <CardTitle>Manage Contacts</CardTitle>
        <CardDescription>
          You have {count} {label} saved on your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button size="lg" onClick={() => navigate("/contacts")}>
          <User className="mr-2 h-4 w-4" />
          Manage Contacts
        </Button>

        {count === 0 ? (
          <p className="text-sm text-muted-foreground">
            No contacts yet. Add one to get started.
          </p>
        ) : (
          <div className="flex gap-4 overflow-x-auto">
            {contacts.slice(0, 3).map((contact) => (
              <ContactCard contact={contact} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactsStatsCard;
