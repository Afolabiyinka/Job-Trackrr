import {
  Briefcase,
  CalendarClock,
  Flag,
  LayoutDashboard,
  User,
} from "lucide-react";
const NAVLINKS = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Jobs", icon: Briefcase, path: "/jobs" },
  { name: "Interviews", icon: CalendarClock, path: "/interviews" },
  { name: "Contacts", icon: User, path: "/contacts" },
  { name: "Goals", icon: Flag, path: "/resume" },
];

export { NAVLINKS };
