import { MOCK_CONTACTS } from "../libs/mockContacts";
import ContactCard from "../components/ContactCard";
import EmptyContacts from "./EmptyContacts";
import AddContact from "../components/AddContact";
import { useGetContacts } from "../hooks/useGetContacts";

const Contacts = () => {

  const { contacts, error, isLoading } = useGetContacts()
  if (contacts?.length === 0) {
    return <EmptyContacts />;
  }
  console.log(contacts)

  return (
    <div className="h-full w-full p-2 space-y-6">
      <div className="flex md:justify-between md:items-center flex-col md:flex-row justify-start gap-3">
        <h1 className="text-xl font-semibold">Contacts</h1>
        <AddContact />
      </div>
      <div className="grid  md:justify-center md:grid-cols-4 gap-6 w-full">
        {contacts?.map((contact, i) => (
          <ContactCard key={i} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
