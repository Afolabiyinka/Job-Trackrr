import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ArrowLeft, RefreshCwIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Verify your login</DialogTitle>
          <DialogDescription>
            Enter the verification code we sent to your email address:{" "}
            <span className="font-medium">m@example.com</span>.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Button
            size={`lg`}
            variant={`secondary`}
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
            Go BACK
          </Button>
        </div>{" "}
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="otp-verification">
              Verification code
            </FieldLabel>
          </div>
          <InputOTP maxLength={6} id="otp-verification" required>
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator className="mx-2" />
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription className="flex justify-between items-center">
            <h1>Code expires in 5 minutes</h1>
            <Button variant="outline">
              <RefreshCwIcon />
              Resend Code
            </Button>
          </FieldDescription>
        </Field>
        <DialogFooter>
          <Field>
            <Button type="submit" className="w-full" size={`lg`}>
              Verify
            </Button>
          </Field>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyOtp;
