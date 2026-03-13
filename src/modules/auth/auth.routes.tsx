import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

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
];

export { authRoutes };
