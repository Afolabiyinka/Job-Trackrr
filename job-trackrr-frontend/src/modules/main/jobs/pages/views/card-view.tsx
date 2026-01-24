import { useFilterJobs } from "../../hooks/useFilterJobs";
import JobCard from "../../components/job-card";

const CardView = () => {
  const { interviewJobs, appliedJobs, offeredJobs, rejectedJobs } =
    useFilterJobs();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-2">
      <div className="grid lg:grid-cols-2 w-full gap-10 pt-6">
        <JobCard
          title="Applied Jobs"
          desc="Jobs you've applied to"
          jobs={appliedJobs}
          status="applied"
        />
        <JobCard
          title="Offered Jobs"
          desc="Jobs you've been offered"
          jobs={offeredJobs}
          status="offer"
        />
        <JobCard
          title="Interview Jobs"
          desc="Jobs with interview coming up"
          jobs={interviewJobs}
          status="interview"
        />
        <JobCard
          title="Rejected Jobs"
          desc="Rejected jobs"
          jobs={rejectedJobs}
          status="rejected"
        />
      </div>
    </div>
  );
};

export default CardView;
