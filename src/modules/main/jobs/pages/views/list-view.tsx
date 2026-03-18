import ListItem from "../../components/list-item";
import { useJobs } from "../../store/useJobs";

const ListView = () => {
  const { jobs } = useJobs();
  return (
    <div className="space-y-4 rounded-md p-2 md:p-4  overflow-y-auto">
      <span className="p-3 w-full rounded-lg flex justify-between px-3">
        <h1>Name</h1>
        <h1>Interview Date</h1>
        <h1>Status</h1>
      </span>
      {jobs.map((job) => (
        <ListItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default ListView;
