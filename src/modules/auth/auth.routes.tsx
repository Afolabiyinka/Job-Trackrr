import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Login = lazy(() => import("@/modules/auth/pages/Login"));
const SignUp = lazy(() => import("@/modules/auth/pages/SignUp"));
const Otp = lazy(() => import("@/modules/auth/pages/Otp"));
const authRoutes: RouteObject[] = [
  {
    path: "login",
    index: true,
    Component: Login,
  },
  {
    path: "signup",
    Component: SignUp,
  },
  {
    path: "forgot-password",
    Component: Otp,
  },
];

export { authRoutes };
