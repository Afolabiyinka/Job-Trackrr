import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flag } from "lucide-react";

const GoalsStatsCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Goals</CardTitle>
        <CardDescription>
          Work on defining and setting your goals!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button size={`lg`}>
          <Flag />
          Set My Goals
        </Button>
      </CardContent>
    </Card>
  );
};

export default GoalsStatsCard;
