import {
  Briefcase,
  CalendarClock,
  File,
  LayoutDashboard,
  User,
} from "lucide-react";
const NAVLINKS = [
  { name: "Dashboard", icon: LayoutDashboard, path: "dashboard" },
  { name: "Jobs", icon: Briefcase, path: "jobs" },
  { name: "Interviews", icon: CalendarClock, path: "interviews" },
  { name: "Contacts", icon: User, path: "contacts" },
  { name: "Resume", icon: File, path: "resume" },
];

export { NAVLINKS };
