import ListItem from "../../components/list-item";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "@/components/pagination";
import { useGetJobs } from "../../hooks/useGetJobs";

const ListView = () => {
  const { data } = useGetJobs();
  const { currentPage, handleNextPage, handlePrevPage } = usePagination();

  return (
    <div className="space-y-4 rounded-md p-1 md:p-4  overflow-y-auto">
      {data?.data.map((job) => (
        <ListItem key={job.id} job={job} />
      ))}

      {data?.data.length === 10 && (
        <Pagination
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}
    </div>
  );
};

export default ListView;
