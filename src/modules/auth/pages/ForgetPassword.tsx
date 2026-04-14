import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger>
        <p className="text-sm text-primary float-right"> Forgot password?</p>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle> Enter your email address</DialogTitle>
          <DialogDescription>
            We will send you a verification code to confirm your identity.
          </DialogDescription>
        </DialogHeader>
        <CustomInput
          type="email"
          placeholder="e.g JohnSmith@gmail.com"
          icon="Mail"
        />
        <Button
          className="w-full"
          size={`lg`}
          onClick={() => navigate("/verify-otp")}
        >
          Send Code <ArrowRight />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ForgetPassword;
