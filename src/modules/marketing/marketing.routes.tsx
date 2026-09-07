import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const LandingPage = lazy(() => import("@/modules/marketing/pages/LandingPage"));
const Testimonials = lazy(
  () => import("@/modules/marketing/pages/Testimonials"),
);
const Features = lazy(() => import("@/modules/marketing/pages/Features"));
const HowItWorks = lazy(() => import("@/modules/marketing/pages/How-It-works"));
const About = lazy(() => import("@/modules/marketing/pages/About"));
const JobSearchTips = lazy(
  () => import("@/modules/marketing/pages/footer-links/JobSearchTips"),
);
const ResumeGuide = lazy(
  () => import("@/modules/marketing/pages/footer-links/ResumeGuide"),
);
const InterviewPrep = lazy(
  () => import("@/modules/marketing/pages/footer-links/InterviewPrep"),
);

import PrivacyPolicy from "@/modules/marketing/pages/footer-links/PrivacyPolicy";
import TermsOfService from "@/modules/marketing/pages/TermsOfService";
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
    path: "about",
    Component: About,
    handle: { title: "About" },
  },
  {
    path: "resources/job-tips",
    Component: JobSearchTips,
    handle: { title: "Job Search Tips" },
  },
  {
    path: "resources/resume",
    Component: ResumeGuide,
    handle: { title: "Resume Guide" },
  },
  {
    path: "resources/interview",
    Component: InterviewPrep,
    handle: { title: "Interview Prep" },
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
