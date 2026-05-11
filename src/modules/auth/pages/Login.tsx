import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import ForgetPassword from "./ForgetPassword";
import { motion } from "framer-motion";

const Login = () => {
  const { handleLogin, loading, setLoginData, loginData } = useLogin();

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
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your account and continue tracking your applications
            </p>
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="w-4 h-4" />
              <Label
                htmlFor="remember"
                className="text-sm font-normal cursor-pointer"
              >
                Remember me
              </Label>
            </div>

            <ForgetPassword />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={loading}
          >
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
          <div className="text-center">
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