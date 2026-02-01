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
import ContactCard from "../../contacts/ContactCard";

const ContactsStatsCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-full">
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
        <div className="grid grid-flow-col-dense gap-5 mt-3 p-1  overflow-x-scroll">
          {[...Array(10)].map((_, i) => (
            <ContactCard key={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactsStatsCard;
