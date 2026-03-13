import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const LandingPage = lazy(() => import("@/modules/marketing/pages/LandingPage"));
const Testimonials = lazy(
  () => import("@/modules/marketing/pages/Testimonials"),
);
const Features = lazy(() => import("@/modules/marketing/pages/Features"));
const HowItWorks = lazy(() => import("@/modules/marketing/pages/How-It-works"));

const marketingRoutes: RouteObject[] = [
  {
    index: true,
    Component: LandingPage,
  },
  {
    index: true,
    path: "how-it-works",
    Component: HowItWorks,
  },
  {
    path: "testimonials",
    Component: Testimonials,
  },
  {
    path: "features",
    Component: Features,
  },
];

export { marketingRoutes };
