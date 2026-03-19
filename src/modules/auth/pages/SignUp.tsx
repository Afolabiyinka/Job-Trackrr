import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Loader2, Lock, LogIn, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignUp";
import type React from "react";

const SignUp = () => {
  const { handleSignup, loading, setSignUpData, signupData } = useSignup();
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSignup();
  }
  return (
    <div className="h-full w-full border flex justify-center items-center">
      <form className="md:min-w-md" onSubmit={onSubmit}>
        <h1 className="text-3xl mb-9 text-center flex gap-3 items-center justify-center">
          <User size={30} />
          Create an account
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <CustomInput
            type="text"
            placeholder="Username"
            icon={<User />}
            value={signupData.username}
            onChange={(e) => setSignUpData({ ...signupData, username: e })}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            icon={<Mail />}
            value={signupData.email}
            onChange={(e) => setSignUpData({ ...signupData, email: e })}
          />
          <CustomInput
            type="password"
            placeholder="Password"
            icon={<Lock />}
            value={signupData.password}
            onChange={(e) => setSignUpData({ ...signupData, password: e })}
          />
          <CustomInput
            type="password"
            placeholder="Confirm Password"
            icon={<Lock />}
            value={signupData.confirmedPassword}
            onChange={(e) =>
              setSignUpData({ ...signupData, confirmedPassword: e })
            }
          />
          <span className="flex gap-2  mt-3 w-fit items-center  justify-start">
            <Checkbox id="checkbox" className="w-4 h-4" />
            <Label htmlFor="checkbox" className="">
              Remember me
            </Label>
          </span>
          <span className="w-full border rounded-xl flex justify-center items-center">
            {loading ? (
              <Loader2 className="animate-spin h-8 w-6" />
            ) : (
              <Button size={`lg`} className="w-full">
                Create an account
                <LogIn />
              </Button>
            )}
          </span>
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to={`/login`} className="text-primary cursor-pointer">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
