import type { RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import NotFound from "@/modules/NotFound";
import Jobs from "@/modules/main/jobs/pages/Jobs";
import { ComponentExample } from "@/components/component-example";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/modules/auth/pages/Login";
import SignUp from "@/modules/auth/pages/SignUp";
import Settings from "@/modules/main/settings/pages/Settings";
import JobPage from "@/modules/main/jobs/pages/JobPage";
import LoadingContainer from "@/components/loader/loadingcontainer";

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
