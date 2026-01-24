import { Briefcase } from "lucide-react";
import CreateJobStepper from "../../components/create-job/stepper/CreateJob-Stepper";

const NoJobs = () => {
  return (
    <div className="h-screen w-full flex justify-center items-start">
      <div className="w-full h-4/5 flex-col flex justify-center items-center  border rounded-2xl">
        <Briefcase size={100} />

        <p className="text-xl mb-3">Add a new job to get Started</p>
        <CreateJobStepper title="Add a new job" />
      </div>
    </div>
  );
};

export default NoJobs;
