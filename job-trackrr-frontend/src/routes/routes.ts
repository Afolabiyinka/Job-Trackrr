import type { RouteObject } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoadingContainer from "@/components/loader/loadingcontainer";

// Lazy-loaded pages
const Dashboard = lazy(
  () => import("@/modules/main/dashboard/pages/DashBoard"),
);
const NotFound = lazy(() => import("@/modules/NotFound"));
const Jobs = lazy(() => import("@/modules/main/jobs/pages/Jobs"));
const JobPage = lazy(() => import("@/modules/main/jobs/pages/JobPage"));
const Settings = lazy(() => import("@/modules/main/settings/pages/Settings"));
const ComponentExample = lazy(() => import("@/components/component-example"));
const Login = lazy(() => import("@/modules/auth/pages/Login"));
const SignUp = lazy(() => import("@/modules/auth/pages/SignUp"));

export const routes: RouteObject[] = [
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
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
        path: "interviews",
        Component: ComponentExample,
      },
      {
        path: "settings",
        Component: Settings,
      },
      {
        path: "random",
        Component: LoadingContainer,
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
];
