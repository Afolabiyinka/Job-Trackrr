import RoutesConfig from "./routes/routes-config";
import { useTheme } from "./modules/theme/useTheme";
import React from "react";
import { Toaster } from "sonner";
import { useUser } from "./modules/main/settings/store/useUser";
import { useFetchUser } from "./modules/main/settings/hooks/useFetchUser";

export function App() {
  const { fetchedUser } = useFetchUser();
  const { setUser } = useUser();
  const { theme } = useTheme();

  React.useEffect(() => {
    if (fetchedUser?.user) {
      setUser(fetchedUser.user);
    } else {
      setUser(null);
    }
  }, [fetchedUser, setUser]);

  // Handle theme
  React.useEffect(() => {
    document.body.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      document.body.classList.add(systemTheme);
    } else {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="font-[Geist]">
      <RoutesConfig />
      <Toaster
        position="top-right"
        theme={theme}
        toastOptions={{
          style: {
            borderRadius: "20px",
            // background: `${theme === "light" ? "white" : "#161616"}`,
          },
        }}
      />
    </div>
  );
}

export default App;
