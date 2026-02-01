import GoalsStatsCard from "../components/GoalsStatsCard";
import ContactsStatsCard from "../components/ContactsStatsCard";

const DashBoard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center p-2">
      <section className="grid md:grid-cols-2 w-full gap-6 mb-4 ">
        <GoalsStatsCard />
        <ContactsStatsCard />
      </section>
    </div>
  );
};

export default DashBoard;
