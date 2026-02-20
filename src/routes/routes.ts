import type { RouteObject } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoadingContainer from "@/components/loader/loadingcontainer";
import MarkettingLayout from "@/layouts/MarkettingLayout";
import LandingPage from "@/modules/marketing/LandingPage";
import Testimonials from "@/modules/marketing/pages/Testimonials";

// Lazy-loaded pages
const Dashboard = lazy(
  () => import("@/modules/main/dashboard/pages/DashBoard"),
);
const NotFound = lazy(() => import("@/modules/NotFound"));
const Jobs = lazy(() => import("@/modules/main/jobs/pages/Jobs"));
const JobPage = lazy(() => import("@/modules/main/jobs/pages/JobPage"));
const Settings = lazy(() => import("@/modules/main/settings/pages/Settings"));
const Login = lazy(() => import("@/modules/auth/pages/Login"));
const SignUp = lazy(() => import("@/modules/auth/pages/SignUp"));
const Contacts = lazy(() => import("@/modules/main/contacts/pages/Contacts"));

export const routes: RouteObject[] = [
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/",
    Component: MarkettingLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "testimonials",
        Component: Testimonials,
      },
    ],
  },
  {
    path: "app",
    Component: MainLayout,
    children: [
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
            handle: { title: "Jobs" },
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
        path: "settings",
        Component: Settings,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        index: true,
        Component: Login,
      },
      {
        path: "signup",
        index: true,
        Component: SignUp,
      },
    ],
  },
  {
    path: "random",
    Component: LoadingContainer,
  },
];
