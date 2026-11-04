import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAVLINKS } from "./utils/nav";
import { useLogout } from "../../auth/hooks/useLogout";
import Logo from "@/components/logo/Logo";
import SpinningLoader from "@/components/loader/spinningloader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LogOut, Settings as SettingsIcon, UserRound } from "lucide-react";
import { useUser } from "../settings/store/useUser";
import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DesktopNav = () => {
  const { pathname } = useLocation();
  const { logoutLoading, logoutMutate } = useLogout();
  const { user } = useUser();

  return (
    <TooltipProvider delayDuration={100}>
      <nav className="hidden lg:flex h-full w-18 flex-col items-center gap-2 border-r bg-background py-4">
        <div className="mb-3 flex size-12 items-center justify-center rounded-full transition hover:bg-muted">
          <Logo collapsed />
        </div>

        <div className="flex flex-col items-center gap-5">
          {NAVLINKS.map(({ icon: Icon, name, path }) => {
            const isActive = pathname.includes(path);
            return (
              <Tooltip key={path}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={path}
                    aria-label={name}
                    className="relative flex size-12 items-center justify-center rounded-xl transition hover:bg-muted active:scale-95"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-primary/70"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon
                      weight={isActive ? "fill" : "regular"}
                      className={cn(
                        "relative size-6 stroke-[1.75px]",
                        isActive && "text-background",
                      )}
                    />
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">{name}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <div className="mt-auto">
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  {/* <button
                    aria-label="Account"
                    className="flex size-12 items-center justify-center rounded-full transition hover:bg-muted active:scale-95"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-muted text-sm font-medium uppercase">
                      {user?.username?.[0] ?? <UserRound className="size-4" />}
                    </span>
                  </button> */}
                  <Avatar size="lg">
                    <AvatarImage></AvatarImage>
                    <AvatarFallback>
                      {user?.username?.[0] ?? <UserRound className="size-4" />}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">{user?.username}</TooltipContent>
            </Tooltip>

            <DropdownMenuContent
              side="right"
              align="end"
              sideOffset={12}
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
      </nav>
    </TooltipProvider>
  );
};

export default DesktopNav;
