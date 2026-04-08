import { Button } from "@/components/ui/button";
import { MOCK_CONTACTS } from "../libs/mockContacts";
import ContactCard from "../components/ContactCard";
import EmptyContacts from "./EmptyContacts";

const Contacts = () => {
  if (MOCK_CONTACTS.length === 0) {
    return <EmptyContacts />;
  }
  return (
    <div className="h-full w-full p-2 space-y-6">
      <div className="flex md:justify-between md:items-center flex-col md:flex-row justify-start gap-3">
        <h1 className="text-xl font-semibold">Contacts</h1>
        <Button size={`lg`}>
          Add a new contact
          {/* <Contact /> */}
        </Button>
      </div>
      <div className="grid  md:justify-center md:grid-cols-4 gap-6 w-full">
        {MOCK_CONTACTS.map((contact, i) => (
          <ContactCard key={i} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
