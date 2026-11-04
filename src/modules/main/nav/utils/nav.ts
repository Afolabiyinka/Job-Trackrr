// import {
//   BriefcaseBusiness,
//   CalendarClock,
//   File,
//   HouseIcon,
//   Users,
// } from "lucide-react";

import { BriefcaseIcon, CalendarIcon, FileIcon, HouseIcon, UsersIcon } from "@phosphor-icons/react";

const NAVLINKS = [
  { name: "Dashboard", icon: HouseIcon, path: "dashboard" },
  { name: "Jobs", icon: BriefcaseIcon, path: "jobs" },
  { name: "Interviews", icon: CalendarIcon, path: "interviews" },
  { name: "Contacts", icon: UsersIcon, path: "contacts" },
  { name: "Resume", icon: FileIcon, path: "resume" },
];

export { NAVLINKS };
