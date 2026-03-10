import { Checkbox } from "@/components/ui/checkbox";

const GoalCard = ({ goal }: { goal: string }) => {
  return (
    <div className="w-full flex justify-start gap-2 items-center border rounded-lg p-4">
      <Checkbox id="checkbox" />
      <label htmlFor="checkbox">
        <p>{goal}</p>
      </label>
    </div>
  );
};

export default GoalCard;
