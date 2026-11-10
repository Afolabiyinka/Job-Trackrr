import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignUp";
import type React from "react";
import { motion } from "framer-motion";
import SpinningLoader from "@/components/loader/spinningloader";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import LinkedInLoginButton from "../components/LinkedInLoginButton";

const SignUp = () => {
  const { handleSignup, loading, setSignUpData, signupData } = useSignup();
  const { handleGoogleLogin, googleLoading } = useGoogleLogin();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSignup();
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
          <h1 className="text-3xl font-bold tracking-tight">New here?</h1>
          <p className="text-muted-foreground">
            Create your account and start tracking your job applications today
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="username" className="text-sm font-medium">
              Username
            </Label>
            <CustomInput
              type="text"
              placeholder="Choose a username"
              icon="User"
              id="username"
              value={signupData.username}
              onChange={(e) =>
                setSignUpData({ ...signupData, username: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email address
            </Label>
            <CustomInput
              type="email"
              placeholder="you@example.com"
              icon="Mail"
              id="email"
              value={signupData.email}
              onChange={(e) =>
                setSignUpData({ ...signupData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <CustomInput
              type="password"
              placeholder="Create a strong password"
              icon="Lock"
              id="password"
              value={signupData.password}
              onChange={(e) =>
                setSignUpData({ ...signupData, password: e.target.value })
              }
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <SpinningLoader />
                Creating account...
              </>
            ) : (
              "Create account"
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
                text="signup_with"
                width="100%"
                onSuccess={(data) => handleGoogleLogin(data)}
              />
            )}
          </div>

          <LinkedInLoginButton text="LinkedIn" />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
