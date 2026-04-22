import { Outlet, useMatches, type RouteObject } from "react-router-dom";
import { lazy, useEffect } from "react";

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

const RootWrapper = () => {
  const matches = useMatches();
  useEffect(() => {
    const currentMatch = [...matches].reverse().find((m) =>
      (m.handle as { title?: string })?.title
    );
    const pageTitle = (currentMatch?.handle as { title?: string })?.title || "";
    document.title = `Job Trackrr | ${pageTitle}`;
  }, [matches]);
  return <Outlet />;
};

export const routes: RouteObject[] = [
  {
    element: <RootWrapper />,
    children: [
      { path: "*", Component: NotFound },
      { path: "/", Component: MarkettingLayout, children: marketingRoutes },
      { path: "/", Component: MainLayout, children: mainRoutes },
      { path: "/", Component: AuthLayout, children: authRoutes },
      {
        path: "/onboarding", Component: OnBoarding, handle: {
          title: "Onboarding"
        }
      },
    ]
  }
];
