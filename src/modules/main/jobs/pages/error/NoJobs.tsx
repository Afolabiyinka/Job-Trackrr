import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowRight, Briefcase } from "lucide-react";
import CreateJobStepper from "../../components/create-job/stepper/CreateJob-Stepper";

export default function NoJobs() {
  return (
    <Empty className="h-full border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="h-16 w-16">
          <Briefcase aria-hidden />
        </EmptyMedia>

        <EmptyTitle className="text-2xl">No Jobs Added Yet</EmptyTitle>

        <EmptyDescription className="text-md">
          Add your first job application to start tracking your job search in
          one place.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="flex-row justify-center gap-2">
        <CreateJobStepper title="Add a new job" icon={<ArrowRight />} />
      </EmptyContent>
    </Empty>
  );
}
