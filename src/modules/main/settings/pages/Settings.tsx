import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChangeTheme from "../components/ChangeTheme";
import DeleteAccount from "../components/DeleteAccount";
import EditInfo from "../components/EditInfo";
import { useIsMobile } from "@/shared/hooks/useMobile";
import { User, Palette, Shield, AlertTriangle } from "lucide-react";
import FeatureInDevelopment from "@/modules/ComingSoon";

const Settings = () => {
  const isMobile = useIsMobile(738);

  const settingsTabs = [
    {
      value: "theme",
      label: "Theme",
      icon: Palette,
      content: "theme",
    },
    {
      value: "account",
      label: "Account",
      icon: User,
      content: "account",
    },

    {
      value: "security",
      label: "Security",
      icon: Shield,
      content: "security",
    },
    {
      value: "danger",
      label: "Danger Zone",
      icon: AlertTriangle,
      content: "danger",
    },
  ];
  return (
    <Tabs
      defaultValue={settingsTabs[0].value}
      orientation={isMobile ? "horizontal" : "vertical"}
      className={`
    flex w-full gap-4 h-full
    ${isMobile ? "flex-col" : "flex-row items-start"}
  `}
    >
      <TabsList
        className={`
    shrink-0
    ${isMobile
            ? "flex w-full overflow-x-auto whitespace-nowrap gap-2 p-1"
            : "flex h-fit min-w-55 flex-col items-stretch gap-1"
          }
  `}
      >
        {" "}
        {settingsTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`
    flex items-center gap-2 p-2
    ${isMobile ? "shrink-0" : "w-full justify-start"}
  `}
          >
            {" "}
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="account" className="w-full h-full">
        <EditInfo />
      </TabsContent>
      <TabsContent value="security" className="w-full h-full">
        <FeatureInDevelopment />
      </TabsContent>
      <TabsContent value="theme" className="w-full h-full">
        <ChangeTheme />
      </TabsContent>
      <TabsContent value="danger">
        <DeleteAccount />
      </TabsContent>
    </Tabs>
  );
};

export default Settings;
