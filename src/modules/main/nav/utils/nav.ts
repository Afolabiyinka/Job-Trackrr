import {
  BriefcaseBusiness,
  CalendarClock,
  File,
  LayoutDashboard,
  Users
} from "lucide-react";
const NAVLINKS = [
  { name: "Dashboard", icon: LayoutDashboard, path: "dashboard" },
  { name: "Jobs", icon: BriefcaseBusiness, path: "jobs" },
  { name: "Interviews", icon: CalendarClock, path: "interviews" },
  { name: "Contacts", icon: Users, path: "contacts" },
  { name: "Resume", icon: File, path: "resume" },
];

export { NAVLINKS };
