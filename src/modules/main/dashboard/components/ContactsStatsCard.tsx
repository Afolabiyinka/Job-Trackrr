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

  const count = contacts.length;
  const label = count === 1 ? "Contact" : "Contacts";

  return (
    <Card className="h-full w-full rounded-2xl bg-muted/30 shadow-none ring-0">
      <CardHeader className="pb-3">
        <CardTitle>People in your corner</CardTitle>
        <CardDescription>
          {count} {label.toLowerCase()} saved for your search
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          variant="secondary"
          size={`lg`}
          onClick={() => navigate("/contacts")}
        >
          <User className="mr-2 h-4 w-4" />
          Open contacts
        </Button>

        {count === 0 ? (
          <p className="text-sm text-muted-foreground">
            No contacts yet. Add one to get started.
          </p>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {contacts.slice(0, 3).map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactsStatsCard;
