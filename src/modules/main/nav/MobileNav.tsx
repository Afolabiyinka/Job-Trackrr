import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Settings as SettingsIcon } from "lucide-react";
import { NAVLINKS } from "./utils/nav";
import { useLogout } from "../../auth/hooks/useLogout";
import { useUser } from "../settings/store/useUser";
import Logo from "@/components/logo/Logo";
import SpinningLoader from "@/components/loader/spinningloader";
import SearchInput from "../search/components/SearchInput";
import DashboardNotifications from "./DashboardNotifications";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileNav = () => {
  const { pathname } = useLocation();
  const { logoutLoading, logoutMutate } = useLogout();
  const { user } = useUser();

  return (
    <>
      {/* Top bar */}
      <header className="flex items-center justify-between p-2 lg:hidden">
        <Logo />
        <div className="flex items-center gap-2">
          <DashboardNotifications />
          <SearchInput />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Account"
                className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-medium uppercase text-primary-foreground active:scale-95 transition"
              >
                {user?.username?.[0]}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="min-w-44"
            >
              <DropdownMenuItem asChild>
                <NavLink to="/settings">
                  <SettingsIcon />
                  Settings
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => logoutMutate()}
                disabled={logoutLoading}
              >
                {logoutLoading ? <SpinningLoader /> : <LogOut />}
                {logoutLoading ? "Logging out..." : "Logout"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Floating dock */}
      <nav className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4 lg:hidden">
        <div className="flex items-center gap-1 rounded-full bg-foreground p-1.5 shadow-xl">
          {NAVLINKS.map(({ icon: Icon, name, path }) => {
            const isActive = pathname.includes(path);
            return (
              <NavLink
                key={path}
                to={path}
                aria-label={name}
                className="relative flex h-11 items-center justify-center gap-2 rounded-full px-3.5 active:scale-95 transition"
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon
                  className={`relative size-5 stroke-[1.75px] ${
                    isActive ? "text-primary-foreground" : "text-background/70"
                  }`}
                />
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    className="relative overflow-hidden whitespace-nowrap text-sm font-medium text-primary-foreground"
                  >
                    {name}
                  </motion.span>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
