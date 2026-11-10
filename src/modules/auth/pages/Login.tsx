import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import ForgetPassword from "./ForgetPassword";
import { motion } from "framer-motion";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import { GoogleLogin } from "@react-oauth/google";
import SpinningLoader from "@/components/loader/spinningloader";
import LinkedInLoginButton from "../components/LinkedInLoginButton";

const Login = () => {
  const { handleLogin, loading, setLoginData, loginData } = useLogin();
  const { handleGoogleLogin, googleLoading } = useGoogleLogin();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin();
  }

  return (
    <div className="h-full w-full flex justify-center items-center py-8 px-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">
            Continue tracking your job applications
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email address
            </Label>
            <CustomInput
              type="email"
              placeholder="you@example.com"
              icon="Mail"
              id="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <ForgetPassword />
            </div>
            <CustomInput
              type="password"
              placeholder="Enter your password"
              icon="Lock"
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <SpinningLoader />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full flex justify-center [&>div]:w-full [&>div>iframe]:!w-full">
            {googleLoading ? (
              <span className="h-10 w-full rounded-full border border-border flex justify-center items-center">
                <SpinningLoader />
              </span>
            ) : (
              <GoogleLogin
                shape="pill"
                size="large"
                text="signin"
                width="100%"
                onSuccess={(data) => handleGoogleLogin(data)}
              />
            )}
          </div>

          <LinkedInLoginButton text="LinkedIn" />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          New to JobTrackrr?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
