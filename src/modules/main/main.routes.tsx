import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy-loaded  main pages
const Dashboard = lazy(
  () => import("@/modules/main/dashboard/pages/DashBoard"),
);
const Jobs = lazy(() => import("@/modules/main/jobs/pages/Jobs"));
const JobPage = lazy(() => import("@/modules/main/jobs/pages/JobPage"));
const Settings = lazy(() => import("@/modules/main/settings/pages/Settings"));
import Resume from "@/modules/main/resume/pages/Resume";
import Results from "@/modules/main/resume/pages/sub-pages/Results";
import FeatureInDevelopment from "../ComingSoon";

const Contacts = lazy(() => import("@/modules/main/contacts/pages/Contacts"));

const mainRoutes: RouteObject[] = [
  {
    index: true,
    path: "dashboard",
    Component: Dashboard,
  },
  {
    path: "jobs",
    children: [
      {
        index: true,
        Component: Jobs,
      },
      {
        path: ":id",
        Component: JobPage,
      },
    ],
  },

  {
    path: "contacts",
    Component: Contacts,
  },
  {
    path: "resume",
    children: [
      {
        index: true,
        Component: Resume,
      },
      {
        path: "results",
        Component: Results,
      },
    ],
  },
  {
    path: "settings",
    Component: Settings,
  },
  {
    path: "goals",
    Component: FeatureInDevelopment,
  },
];

export { mainRoutes };
