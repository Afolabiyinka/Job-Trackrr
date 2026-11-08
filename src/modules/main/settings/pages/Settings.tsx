import { NavLink, Outlet } from "react-router-dom";
import { AlertTriangle, Palette, Shield, UserRound } from "lucide-react";

const settingsSections = [
  { label: "Theme", path: "theme", icon: Palette },
  { label: "Account", path: "account", icon: UserRound },
  { label: "Security", path: "security", icon: Shield },
  { label: "Danger Zone", path: "danger", icon: AlertTriangle },
];

const Settings = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your profile, appearance, and account.
        </p>
      </header>

      <div className="flex min-w-0 flex-col gap-6 md:flex-row">
        <nav
          aria-label="Settings sections"
          className="flex shrink-0 gap-2 overflow-x-auto pb-1 md:w-56 md:flex-col md:overflow-visible md:pb-0"
        >
          {settingsSections.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={`/settings/${path}`}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Settings;
