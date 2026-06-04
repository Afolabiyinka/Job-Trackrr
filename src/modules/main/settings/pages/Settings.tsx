import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChangeTheme from "../components/ChangeTheme";
import DeleteAccount from "../components/DeleteAccount";
import EditInfo from "../components/EditInfo";
import { useIsMobile } from "@/shared/hooks/useMobile";
import { User, Palette, Shield, AlertTriangle, SettingsIcon } from "lucide-react";
import FeatureInDevelopment from "@/modules/ComingSoon";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const settingsTabs = [
  { value: "theme", label: "Theme", icon: Palette, content: <ChangeTheme /> },
  { value: "account", label: "Account", icon: User, content: <EditInfo /> },
  { value: "security", label: "Security", icon: Shield, content: <FeatureInDevelopment /> },
  { value: "danger", label: "Danger Zone", icon: AlertTriangle, content: <DeleteAccount /> },
] as const;

const Settings = () => {
  const isMobile = useIsMobile(738);

  return (
    <Dialog>
      <DialogTrigger className="flex gap-2 items-center p-3 rounded-3xl hover:bg-muted transition cursor-pointer">
        <SettingsIcon className="h-4.5 w-4.5" />
        <span>Settings</span>
      </DialogTrigger>


      <DialogContent className="sm:max-w-5xl h-[80vh] max-h-[80vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">Settings</DialogTitle>
          <DialogDescription>
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue={settingsTabs[0].value}
          orientation={isMobile ? "horizontal" : "vertical"}
          className={`flex w-full h-full min-h-0 ${isMobile ? "flex-col" : "flex-row"}`}
        >
          {/* Sidebar / top nav */}
          <TabsList
            className={`
              shrink-0
              ${isMobile
                ? "flex w-full overflow-x-auto gap-1 p-2"
                : "flex flex-col h-full items-stretch gap-1 p-2 w-52"
              }
            `}
          >
            {settingsTabs.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={`
                  flex items-center gap-2.5 px-3 py-2 text-sm
                  ${isMobile ? "shrink-0" : "w-full justify-start"}
                `}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className={isMobile ? "hidden" : "block"}>{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content panels — each scrolls independently */}
          <div className="flex-1 min-h-0 overflow-y-auto md:p-6">
            {settingsTabs.map(({ value, content }) => (
              <TabsContent
                key={value}
                value={value}
                forceMount
                className="mt-0 h-full data-[state=inactive]:hidden"
              >
                {content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;