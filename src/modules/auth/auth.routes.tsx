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
    handle: { title: "Login" }
  },
  {
    path: "signup",
    Component: SignUp,
    handle: { title: "Sign Up" }

  },

  {
    path: "verify-otp",
    Component: VerifyOtp,
    handle: { title: "Verify Otp" }
  },
];

export { authRoutes };
