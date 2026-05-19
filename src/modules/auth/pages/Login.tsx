import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import ForgetPassword from "./ForgetPassword";
import { motion } from "framer-motion";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const { handleLogin, loading, setLoginData, loginData } = useLogin();
  const { handleGoogleLogin, googleLoading } = useGoogleLogin();
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin();
  }

  return (
    <div className="h-full w-full flex justify-center items-center py-8">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Header */}
          <div className="text-left space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">
              Continue tracking your job applications
            </p>
          </div>

          {/* Google Login - FIRST */}
          <div className="w-full pt-2">
            {googleLoading ? (
              <span className="p-3 rounded-full border border-border flex justify-center items-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
              </span>
            ) : (
              <GoogleLogin
                shape="pill"
                size="large"
                text="signin_with"

                onSuccess={(data) => handleGoogleLogin(data)}
              />
            )}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background  px-2 p-1 rounded-full text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
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
                onChange={(e) => setLoginData({ ...loginData, email: e })}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <CustomInput
                type="password"
                placeholder="Enter your password"
                icon="Lock"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e })}
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-end">
            <ForgetPassword />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground">
              New to JobTrackrr?{" "}
              <Link
                to="/signup"
                className="text-primary font-medium hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
