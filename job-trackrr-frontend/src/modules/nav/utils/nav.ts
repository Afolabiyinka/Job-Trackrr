import {
  Briefcase,
  CalendarCheck,
  FileText,
  Handshake,
  LayoutDashboard,
} from "lucide-react";
const NAVLINKS = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Jobs", icon: Briefcase, path: "/jobs" },
  { name: "Interviews", icon: CalendarCheck, path: "/interviews" },
  { name: "Connections", icon: Handshake, path: "/connections" },
  { name: "Saved Resumes", icon: FileText, path: "/resume" },
];

export { NAVLINKS };
