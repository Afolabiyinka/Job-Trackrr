import {
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  File,
  Home,
  Users,
} from "lucide-react";

const NAVLINKS = [
  { name: "Dashboard", icon: Home, path: "dashboard" },
  { name: "Jobs", icon: BriefcaseBusiness, path: "jobs" },
  { name: "Interviews", icon: CalendarClock, path: "interviews" },
  { name: "Contacts", icon: Users, path: "contacts" },
  { name: "Resume", icon: File, path: "resume" },
  { name: "Analytics", icon: BarChart3, path: "analytics" },
];

export { NAVLINKS };
