import ContactsStatsCard from "../components/ContactsStatsCard";
import StatsCard from "../components/stats/StatsCard";
import FollowUpPrompts from "../components/FollowUpPrompts";
import { useGetJobs } from "../../jobs/hooks/useGetJobs";
import NoJobs from "../../jobs/pages/empty/NoJobs";
import DashboardLoader from "../../loading-screens/DashboardLoader";

const DashBoard = () => {
  const { data, loading } = useGetJobs();

  if (loading) {
    return <DashboardLoader />;
  }

  if (data?.data.length === 0) {
    return <NoJobs />;
  }

  return (
    <div className=" w-full flex flex-col  gap-2 p-1">
      <div className="w-full h-full">
        <StatsCard />
      </div>
      <section className="grid w-full gap-6">
        <FollowUpPrompts />
        <ContactsStatsCard />
      </section>
    </div>
  );
};

export default DashBoard;
