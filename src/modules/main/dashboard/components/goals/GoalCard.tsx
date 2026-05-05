import { Checkbox } from "@/components/ui/checkbox";

const GoalCard = ({ goal }: { goal: string }) => {
  return (
    <div className="w-full flex justify-start gap-2 items-center border rounded-lg p-4">
      <Checkbox id={goal} />
      <label htmlFor={goal}>
        <p>{goal}</p>
      </label>
    </div>
  );
};

export default GoalCard;
