import RoutesConfig from "./routes/routes-config";
import { useTheme } from "./modules/theme/useTheme";
import React from "react";
import { Toaster } from "sonner";
import { useUser } from "./modules/main/settings/store/useUser";
import { useFetchUser } from "./modules/main/settings/hooks/useFetchUser";
import LoadingContainer from "./components/loader/loadingcontainer";

export function App() {
  const { fetchedUser, loading, error } = useFetchUser();
  const { setUser } = useUser();
  const { theme } = useTheme();

  React.useEffect(() => {
    if (fetchedUser?.user) {
      setUser(fetchedUser.user);
    }
  }, [fetchedUser, setUser, error]);

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

  // if (loading) {
  //   return <LoadingContainer />;
  // }
  // React.useEffect(() => {
  //   if (error) {
  //     window.location.href = "/auth/login";
  //   }
  // }, [error]);

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
