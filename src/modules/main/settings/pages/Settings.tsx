import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChangeTheme from "../components/ChangeTheme";
import DeleteAccount from "../components/DeleteAccount";
import EditInfo from "../components/EditInfo";
import { useIsMobile } from "@/shared/hooks/useMobile";
import { User, Palette, Shield, AlertTriangle } from "lucide-react";
import FeatureInDevelopment from "@/modules/ComingSoon";


const Settings = () => {
  const isMobile = useIsMobile(738)


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
    <Tabs defaultValue={settingsTabs[0].value} orientation={isMobile ? "horizontal" : "vertical"} className="w-full h-full">
      <TabsList
        className={`
    flex
    ${isMobile
            ? "w-full overflow-x-auto gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            : "flex-col items-stretch h-fit min-w-55 gap-1"
          }
  `}
      >        {settingsTabs.map((tab) => (
        <TabsTrigger key={tab.value} value={tab.value} className="p-2">
          <tab.icon className="h-4 w-4" />
          {tab.label}
        </TabsTrigger>
      ))}
      </TabsList>

      <TabsContent value="account" className="w-full">
        <EditInfo />
      </TabsContent>
      <TabsContent value="security" className="w-full">
        <FeatureInDevelopment />
      </TabsContent>
      <TabsContent value="theme" className="w-full">
        <ChangeTheme />
      </TabsContent>
      <TabsContent value="danger">
        <DeleteAccount />

      </TabsContent>
    </Tabs>
  );
};

export default Settings;
