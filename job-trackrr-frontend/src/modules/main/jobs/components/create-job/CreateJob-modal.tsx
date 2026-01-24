import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Building2, User } from "lucide-react";
import CreateDropdown from "./create-dropdown";
import CustomInput from "./input/custom-input";

import type { InterviewType, Job, JobType, Status } from "../../types/job";
import { DatePicker } from "@/modules/main/jobs/components/create-job/date-picker";
import type { ReactNode } from "react";
import MoneyInput from "./input/salary-range";
import { useSetJob } from "../../store/useAddJob";

interface Props {
  job: Job;
  title: string;
  icon: ReactNode;
}
const CreateJobModal = ({ job, icon, title }: Props) => {
  const {
    company,
    role,
    companyEmail,
    feedback,
    salaryRange,

    setCompany,
    setInterviewType,
    setRole,
    setStatus,
    setWorkType,
    setCompanyEmail,
    setJobType,
    setFeedback,
    setSalaryRange,
  } = useSetJob();

  const INTERVIEW_TYPES: InterviewType[] = ["Virtual", "In_person"];
  const STATUS_TYPES: Status[] = ["applied", "interview", "offer", "rejected"];

  const JOB_TYPES: JobType[] = [
    "Contract",
    "Full_Time",
    "Internship",
    "Part_Time",
  ];

  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <span>
          <Button size={`lg`}>
            {title}
            <span className="ml-3">{icon}</span>
          </Button>
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle asChild>
            <h1 className="text-xl">Add a new job</h1>
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <CustomInput
              value={job.company}
              onChange={(e) => setCompany(e)}
              placeholder="E.g Google"
              icon={<Building2 />}
              type="text"
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <CustomInput
              value={job.role}
              placeholder={`Enter the role`}
              icon={<User />}
              type="email"
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <CreateDropdown
              hasColor={false}
              value={job.interviewType}
              placeholder="Interview type"
              dropdownItems={INTERVIEW_TYPES}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <DatePicker title="Interview Date" />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <CreateDropdown
              hasColor
              placeholder="Status"
              dropdownItems={STATUS_TYPES}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <MoneyInput
              value={job.salaryRange}
              onChange={(e) => {
                setSalaryRange(e);
              }}
            />{" "}
          </div>
        </div>
        <DialogFooter className="p-2">
          <Button className="" size={`lg`}>
            Add job
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" size={`lg`}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobModal;
