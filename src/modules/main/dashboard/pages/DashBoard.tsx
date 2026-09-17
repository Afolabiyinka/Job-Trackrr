import ContactsStatsCard from "../components/ContactsStatsCard";
import StatsCard from "../components/stats/StatsCard";
import InterviewRemindersCard from "../components/InterviewRemindersCard";
import { useGetJobs } from "../../jobs/hooks/useGetJobs";
import NoJobs from "../../jobs/pages/empty/NoJobs";

const DashBoard = () => {
  const { data } = useGetJobs();

  if (data?.data.length === 0) {
    return <NoJobs />;
  }

  return (
    <div className=" w-full flex flex-col  gap-2 p-1">
      <div className="w-full h-full">
        <StatsCard />
      </div>
      <section className="grid md:grid-cols-1 w-full gap-6  h-full">
        <InterviewRemindersCard />
        {/* <GoalsStatsCard /> */}
        <ContactsStatsCard />
      </section>
    </div>
  );
};

export default DashBoard;
