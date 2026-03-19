import { useMutation } from "@tanstack/react-query";
import React from "react";
import type { SignupPayload } from "../types/types";
import { useNavigate } from "react-router-dom";
import useToastMessage from "@/shared/lib/toastMsg";
import { signup } from "../services/request";
import { queryClient } from "@/shared/constants/queryClient";

export const useSignup = () => {
  const [signupData, setSignUpData] = React.useState<SignupPayload>({
    email: "",
    password: "",
    username: "",
    confirmedPassword: "",
  });

  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: SignupPayload) => signup(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toastSuccess(data.message);
      navigate("/dashboard");
    },
    onError: (err) => {
      toastError(err.message);
    },
  });

  function handleSignup() {
    mutate(signupData);
  }

  return {
    signupData,
    setSignUpData,
    handleSignup,
    loading: isPending,
  };
};
