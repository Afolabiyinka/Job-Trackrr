import { ArrowLeft, ArrowRight, RefreshCwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomInput from "@/modules/main/jobs/components/create-job/input/custom-input";

export default function InputOTPForm() {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, 2));
  };
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col gap-6 justify-center items-center">
      <Button
        className="mx-auto"
        size={`lg`}
        variant="outline"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        Go back
      </Button>

      {/* //The first step */}

      {activeStep === 0 && (
        <Card className="mx-auto max-w-md w-full">
          <CardHeader>
            <CardTitle> Enter your email address</CardTitle>
            <CardDescription>
              We will send you a verification code to confirm your identity.
            </CardDescription>
            <CardContent>
              <CustomInput
                type="email"
                placeholder="e.g JohnSmith@gmail.com"
                icon="Mail"
              />
              <Button onClick={nextStep} className="w-full mt-4" size={`lg`}>
                Send Code <ArrowRight />
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      )}

      {/* //The second step */}

      {activeStep === 1 && (
        <Card className="mx-auto max-w-lg">
          <CardHeader>
            <CardTitle>Verify your login</CardTitle>
            <CardDescription>
              Enter the verification code we sent to your email address:{" "}
              <span className="font-medium">m@example.com</span>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                  Verification code
                </FieldLabel>
                <Button variant="outline" size="xs">
                  <RefreshCwIcon />
                  Resend Code
                </Button>
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
              <FieldDescription></FieldDescription>
            </Field>
          </CardContent>
          <CardFooter>
            <Field>
              <Button type="submit" className="w-full" size={`lg`}>
                Verify
              </Button>
            </Field>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
