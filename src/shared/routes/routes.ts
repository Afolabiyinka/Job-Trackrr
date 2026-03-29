import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

//Layouts
import MainLayout from "@/modules/main/MainLayout";
import AuthLayout from "@/modules/auth/AuthLayout";
import MarkettingLayout from "@/modules/marketing/MarkettingLayout";


//The sub routes
import { authRoutes } from "@/modules/auth/auth.routes";
import { mainRoutes } from "@/modules/main/main.routes";
import { marketingRoutes } from "@/modules/marketing/marketing.routes";

const NotFound = lazy(() => import("@/modules/NotFound"));
const OnBoarding = lazy(() => import("@/modules/main/onboarding/OnBoarding"));


export const routes: RouteObject[] = [
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/",
    Component: MarkettingLayout,
    children: marketingRoutes
  },
  {
    path: "/",
    Component: MainLayout,
    children: mainRoutes
  },
  {
    path: "/",
    Component: AuthLayout,
    children: authRoutes
  },
  {
    path: "/onboarding",
    Component: OnBoarding,
  }

];
