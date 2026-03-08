import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ThemeToggle from "@/modules/main/theme/theme-toggle";

const ChangeTheme = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Theme</CardTitle>
        <CardDescription>Change the appearance of the app</CardDescription>
      </CardHeader>
      <CardContent>
        <ThemeToggle />
      </CardContent>
    </Card>
  );
};

export default ChangeTheme;
