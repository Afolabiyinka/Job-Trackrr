import RoutesConfig from "./shared/routes/routes-config";
import { useTheme } from "./modules/main/theme/useTheme";
import React from "react";
import { Toaster } from "sonner";
import { useUser } from "./modules/main/settings/store/useUser";
import { useFetchUser } from "./modules/main/settings/hooks/useFetchUser";

export function App() {
  const { fetchedUser } = useFetchUser();
  const { setUser } = useUser();
  const { theme } = useTheme();

  React.useEffect(() => {
    setUser(fetchedUser?.user ?? null);
  }, [fetchedUser?.user, setUser]);

  React.useEffect(() => {
    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.body.classList.remove("light", "dark");
    document.body.classList.add(appliedTheme);
  }, [theme]);

  return (
    <div className="font-[Montserrat]">
      <RoutesConfig />
      <Toaster
        position="top-right"
        theme={theme}
        richColors
        toastOptions={{
          style: {
            borderRadius: "20px",
            background: theme === "light" ? "white" : "#161616",
          },
        }}
      />
    </div>
  );
}

export default App;
