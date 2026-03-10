import GoalsStatsCard from "../components/goals/GoalsStatsCard";
import ContactsStatsCard from "../components/ContactsStatsCard";
import StatsCard from "../components/StatsCard";

const DashBoard = () => {
  return (
    <div className="h-full  w-full flex flex-col  gap-4 p-2">
      <div className="w-full h-full">
        <StatsCard />
      </div>
      <section className="grid md:grid-cols-1 w-full gap-6 mb-4 h-full">
        <ContactsStatsCard />
        <GoalsStatsCard />
      </section>
    </div>
  );
};

export default DashBoard;
