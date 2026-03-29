import GoalsStatsCard from "../components/goals/GoalsStatsCard";
import ContactsStatsCard from "../components/ContactsStatsCard";
import StatsCard from "../components/stats/StatsCard";
import { useGetJobs } from "../../jobs/hooks/useGetJobs";
import Reminder from "./Reminder";

const DashBoard = () => {
  const { jobs } = useGetJobs();

  if (jobs?.jobs.length === 0) {
    return <Reminder />;
  }

  return (
    <div className="h-full  w-full flex flex-col  gap-4 p-1">
      <div className="w-full h-full">
        <StatsCard />
      </div>
      <section className="grid md:grid-cols-1 w-full gap-6  h-full">
        <GoalsStatsCard />
        <ContactsStatsCard />
      </section>
    </div>
  );
};

export default DashBoard;
