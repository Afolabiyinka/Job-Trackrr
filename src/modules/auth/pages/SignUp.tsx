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

const SignUp = () => {
  const { handleSignup, loading, setSignUpData, signupData } = useSignup();
  const { handleGoogleLogin, googleLoading } = useGoogleLogin();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSignup();
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
          <div className="text-left space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">New here?</h1>
            <p className="text-muted-foreground">
              Create your account and start tracking your job applications today
            </p>
          </div>

          <div className="w-full pt-2">
            {googleLoading ? (
              <span className="p-3 rounded-full border border-border flex justify-center items-center">
                <SpinningLoader />
              </span>
            ) : (
              <GoogleLogin
                shape="pill"
                size="large"
                text="continue_with"
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
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <CustomInput
                type="text"
                placeholder="Choose a username"
                icon="User"
                id="username"
                value={signupData.username}
                onChange={(e) => setSignUpData({ ...signupData, username: e })}
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
                onChange={(e) => setSignUpData({ ...signupData, email: e })}
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
                onChange={(e) => setSignUpData({ ...signupData, password: e })}
                required
              />
            </div>
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
                <SpinningLoader />
                Creating account...
              </>
            ) : (
              "Create account"
            )}
          </Button>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;