import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const VerifyOtp = lazy(() => import("./pages/VerifyOtp"));
const Login = lazy(() => import("@/modules/auth/pages/Login"));
const SignUp = lazy(() => import("@/modules/auth/pages/SignUp"));
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
    path: "verify-otp",
    Component: VerifyOtp,
  },
];

export { authRoutes };
