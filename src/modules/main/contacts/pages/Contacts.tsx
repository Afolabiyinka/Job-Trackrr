import ContactCard from "../components/ContactCard";
import EmptyContacts from "./EmptyContacts";
import AddContact from "../components/AddContact";
import { useGetContacts } from "../hooks/useGetContacts";

const Contacts = () => {
  const { contacts, error, isLoading } = useGetContacts();


  if (!isLoading && contacts?.length === 0) {
    return <EmptyContacts />
  }

  if (error) {
    <div className="text-sm text-red-500">
      Failed to load contacts.
    </div>
  }

  return (
    <div className="h-full w-full px-4 py-6 space-y-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Contacts
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage people related to your job applications
          </p>
        </div>

        <AddContact title="Add Contact" />
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-full bg-muted animate-pulse"
            />
          ))}
        </div>
      )}



      {!isLoading && contacts && contacts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Contacts;
