import { useMutation } from "@tanstack/react-query";
import React from "react";
import type { SignupPayload } from "../types/types";
import { useNavigate } from "react-router-dom";
import useToastMessage from "@/lib/toastMsg";
import { signup } from "../services/request";
import { queryClient } from "@/constants/queryClient";

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
      navigate("/app");
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
