import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flag } from "lucide-react";
import { mockgoals } from "../../libs/Mockgoals";
import GoalCard from "./GoalCard";

const GoalsStatsCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="">
        <CardTitle>Goals</CardTitle>
        <CardDescription>
          Work on defining and setting your goals!
        </CardDescription>
      </CardHeader>

      <CardContent className="overflow-auto">
        <Button size="lg">
          <Flag />
          Set My Goals
        </Button>
        <div className="flex flex-col gap-3  mt-3">
          {mockgoals.map((goal, i) => (
            <GoalCard goal={goal} key={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalsStatsCard;
