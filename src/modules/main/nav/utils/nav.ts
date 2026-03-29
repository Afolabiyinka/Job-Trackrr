import {
  Briefcase,
  // CalendarClock,
  File,
  Flag,
  LayoutDashboard,
  User,
  Handshake
} from "lucide-react";
const NAVLINKS = [
  { name: "Dashboard", icon: LayoutDashboard, path: "dashboard" },
  { name: "Jobs", icon: Briefcase, path: "jobs" },
  // { name: "Interviews", icon: CalendarClock, path: "interviews" },
  { name: "Connections", icon: Handshake, path: "contacts" },
  { name: "Resume", icon: File, path: "resume" },
  { name: "Goals", icon: Flag, path: "goals" }
];

export { NAVLINKS };
