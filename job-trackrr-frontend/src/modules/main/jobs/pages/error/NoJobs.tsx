import { Briefcase } from "lucide-react";
import CreateJobStepper from "../../components/create-job/stepper/CreateJob-Stepper";

const NoJobs = () => {
  return (
    <div className="h-full w-full flex justify-center items-start rounded-xl">
      <div className="w-full h-4/5 flex-col flex justify-center items-center">
        <Briefcase size={100} className="stroke-[1px]" />

        <p className="text-xl mb-3">Add a new job to get Started</p>
        <CreateJobStepper title="Add a new job" />
      </div>
    </div>
  );
};

export default NoJobs;
