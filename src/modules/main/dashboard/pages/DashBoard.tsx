import ContactsStatsCard from "../components/ContactsStatsCard";
import StatsCard from "../components/stats/StatsCard";
import FollowUpPrompts from "../components/FollowUpPrompts";
import NoJobs from "../../jobs/pages/empty/NoJobs";
import DashboardLoader from "../../loading-screens/DashboardLoader";
import ErrorPage from "../../loading-screens/ErrorRefetch";
import { useGetDashboard } from "../hooks/useGetDashboard";

const DashBoard = () => {
  const { data, isError, isPending, refetch } = useGetDashboard();

  if (isPending) {
    return <DashboardLoader />;
  }

  if (isError) {
    return <ErrorPage action={() => void refetch()} />;
  }

  if (!data) {
    return <ErrorPage />;
  }

  if (data.summary.totalApplications === 0) {
    return <NoJobs />;
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-1 md:gap-10 md:p-2">
      <div className="w-full">
        <StatsCard summary={data.summary} />
      </div>
      <section
        aria-label="Next steps"
        className="grid w-full items-stretch gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(19rem,0.9fr)] xl:gap-6"
      >
        <div className="min-w-0">
          <FollowUpPrompts followUps={data.followUps} />
        </div>
        <aside className="min-w-0">
          <ContactsStatsCard />
        </aside>
      </section>
    </div>
  );
};

export default DashBoard;
