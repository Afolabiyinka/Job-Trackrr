import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { Loader2, Lock, LogIn, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, loading, setLoginData, loginData } = useLogin();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin();
  }
  return (
    <div className="h-full w-full border flex justify-center items-center">
      <form className="md:min-w-md" onSubmit={onSubmit}>
        <h1 className="text-3xl mb-9 text-center flex gap-3 items-center justify-center">
          <User size={30} />
          Login to your account
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <CustomInput
            type="email"
            placeholder="Email"
            icon={<Mail />}
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e })}
          />
          <CustomInput
            type="password"
            placeholder="Password"
            icon={<Lock />}
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e })}
          />

          <span className="flex gap-2  mt-3 w-fit items-center  justify-start">
            <Checkbox id="checkbox" className="w-4 h-4" />
            <Label htmlFor="checkbox">Remember me</Label>
          </span>
          <span className="w-full border rounded-xl flex justify-center items-center">
            {loading ? (
              <Loader2 className="animate-spin h-8 w-6" />
            ) : (
              <Button size={`lg`} className="w-full">
                Log in
                <LogIn />
              </Button>
            )}
          </span>
        </div>
        <p className="text-center mt-4">
          New to JobTrackrr?
          <Link to={`/auth/signup`} className="text-primary cursor-pointer">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
