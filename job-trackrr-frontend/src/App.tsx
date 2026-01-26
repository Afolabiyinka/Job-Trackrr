import RoutesConfig from "./routes/routes-config";
import { useTheme } from "./modules/theme/useTheme";
import React from "react";
import { Toaster } from "sonner";

export function App() {
  const { theme } = useTheme();

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
        toastOptions={{ style: { borderRadius: "20px" } }}
      />
    </div>
  );
}

export default App;
