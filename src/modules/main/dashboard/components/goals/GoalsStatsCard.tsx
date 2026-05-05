import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GoalCard from "./GoalCard";
import { mockgoals } from "../../libs/Mockgoals";

const GoalsStatsCard = () => {
  const navigate = useNavigate();


  const count = mockgoals.length;
  const label = count === 1 ? "Goal" : "Goals";

  return (
    <Card className="w-full ring-0 shadow-none">
      <CardHeader>
        <CardTitle>Goals</CardTitle>
        <CardDescription>
          {count > 0
            ? `You have ${count} ${label} in progress`
            : "Work on defining and setting your goals!"}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <Button size="lg" onClick={() => navigate("/goals")}>
          <Flag className="mr-2 h-4 w-4" />
          Set My Goals
        </Button>

        {count === 0 ? (
          <p className="text-sm text-muted-foreground">
            No goals yet. Set one to get started.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-3 md:gap-10 mt-3">
            {mockgoals.slice(0, 3).map((goal) => (
              <GoalCard goal={goal} key={goal} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GoalsStatsCard;