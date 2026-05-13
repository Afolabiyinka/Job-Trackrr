import {
  Briefcase,
  CalendarClock,
  File,
  LayoutDashboard,
  // Handshake,
  Users
} from "lucide-react";
const NAVLINKS = [
  { name: "Dashboard", icon: LayoutDashboard, path: "dashboard" },
  { name: "Jobs", icon: Briefcase, path: "jobs" },
  { name: "Interviews", icon: CalendarClock, path: "interviews" },
  { name: "Contacts", icon: Users, path: "contacts" },
  { name: "Resume", icon: File, path: "resume" },
  // { name: "Goals", icon: Flag, path: "goals" }
];

export { NAVLINKS };
