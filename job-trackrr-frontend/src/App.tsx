import RoutesConfig from "./routes/routes-config";
import { useTheme } from "./modules/theme/useTheme";
import React from "react";
import { Toaster } from "sonner";
import { useUser } from "./modules/main/settings/store/useUser";

export function App() {
  const { theme } = useTheme();
  // const { user, setUser } = useUser();

  // if (loading) {
  //   return (
  //     <div className="h-screen w-screen flex justify-center items-center">
  //       <Loader />
  //     </div>
  //   );
  // }

  // function getUserInfo() {
  //   try {
  //     if (fetchedUser && !loading) {
  //       setUser(fetchedUser);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // getUserInfo();

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
