import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeToggle from "@/modules/theme/theme-toggle";

const ChangeTheme = () => {
  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle className="text-xl">
          Change the appearance of the app
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ThemeToggle />
      </CardContent>
    </Card>
  );
};

export default ChangeTheme;
