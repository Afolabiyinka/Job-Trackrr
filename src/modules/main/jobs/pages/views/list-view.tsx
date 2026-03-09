import ListItem from "../../components/list-item";
import { useJobs } from "../../store/useJobs";

const ListView = () => {
  const { jobs } = useJobs();
  return (
    <div className="space-y-4 rounded-md p-2 md:p-4 max-h-[500px] overflow-y-auto">
      {jobs.map((job) => (
        <ListItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default ListView;
