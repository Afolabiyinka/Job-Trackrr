import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import PrivacyPolicy from "./pages/footer-links/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

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
    handle: { title: "Welcome" },
  },
  {
    path: "how-it-works",
    Component: HowItWorks,
    handle: { title: "How It Works" },
  },
  {
    path: "reviews",
    Component: Testimonials,
    handle: { title: "Reviews" },
  },
  {
    path: "features",
    Component: Features,
    handle: { title: "Features" },
  },
  {
    path: "privacy-policy",
    Component: PrivacyPolicy,
  },
  {
    path: "terms-of-service",
    Component: TermsOfService,
  },
];

export { marketingRoutes };
