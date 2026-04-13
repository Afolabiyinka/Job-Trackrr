import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, loading, setLoginData, loginData } = useLogin();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin();
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      <form className="md:min-w-md" onSubmit={onSubmit}>
        <div className="mb-3">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-md tracking-wider text-gray-500 mt-1">
            Sign in to your account to continue
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <CustomInput
            type="email"
            placeholder="Email"
            icon={`Mail`}
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e })}
          />
          <CustomInput
            type="password"
            placeholder="Password"
            icon={`Lock`}
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e })}
          />

          <span className="flex items-center justify-between">
            <span className="flex gap-2  mt-3 w-fit items-center  justify-start">
              <Checkbox id="checkbox" className="w-4 h-4" />
              <Label htmlFor="checkbox">Remember me</Label>
            </span>

            <Link
              to={`/forgot-password`}
              className="text-sm text-primary float-right"
            >
              Forgot password?
            </Link>
          </span>
          <Button size={`lg`} className="w-full" disabled={loading}>
            {loading && <Loader2 className="animate-spin h-8 w-6" />} Log in
          </Button>
        </div>
        <p className="text-center mt-4">
          New to JobTrackrr?{" "}
          <Link to={`/signup`} className="text-primary cursor-pointer">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
