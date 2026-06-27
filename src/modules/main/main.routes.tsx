import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import OnBoarding from "./onboarding/OnBoarding";

// Lazy loading the   main pages
const Dashboard = lazy(
  () => import("@/modules/main/dashboard/pages/DashBoard"),
);
const Jobs = lazy(() => import("@/modules/main/jobs/pages/Jobs"));
const JobPage = lazy(() => import("@/modules/main/jobs/pages/JobPage"));
const Settings = lazy(() => import("@/modules/main/settings/pages/Settings"));
const Resume = lazy(() => import("@/modules/main/resume/pages/Resume"));
const Results = lazy(
  () => import("@/modules/main/resume/pages/sub-pages/Results"),
);
// const OnBoarding = lazy(() => import("@/modules/main/onboarding/OnBoarding"));

const Contacts = lazy(() => import("@/modules/main/contacts/pages/Contacts"));
const FeatureInDevelopment = lazy(() => import("../ComingSoon"));

const mainRoutes: RouteObject[] = [
  {
    index: true,
    path: "dashboard",
    Component: Dashboard,
    handle: { title: "Dashboard" },
  },
  {
    path: "jobs",
    handle: { title: "Jobs" },
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
    handle: { title: "Contacts" },
  },
  {
    path: "resume",
    handle: { title: "Resume" },
    children: [
      {
        index: true,
        Component: Resume,
      },
      {
        path: "results",
        Component: Results,
        handle: { title: "Resume Results" },
      },
    ],
  },
  {
    path: "settings",
    Component: Settings,
    handle: { title: "Settings" },
  },
  {
    path: "goals",
    Component: FeatureInDevelopment,
    handle: { title: "Goals" },
  },
  {
    path: "interviews",
    Component: FeatureInDevelopment,
    handle: { title: "Interviews" },
  },
  {
    path: "onboarding",
    Component: OnBoarding,
    handle: {
      title: "Onboarding",
    },
  },
];

export { mainRoutes };
