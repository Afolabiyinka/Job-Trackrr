import { useMutation } from "@tanstack/react-query";
import React from "react";
import type { SignupPayload } from "../types/types";
import { useUser } from "@/modules/main/settings/store/useUser";
import { useNavigate } from "react-router-dom";
import useToastMessage from "@/lib/toastMsg";
import { signup } from "../services/request";

export const useSignup = () => {
  const [signupData, setSignUpData] = React.useState<SignupPayload>({
    email: "",
    password: "",
    username: "",
    confirmedPassword: "",
  });

  const { setToken, setUser } = useUser();
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: SignupPayload) => signup(payload),
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user);
      toastSuccess(data.message);
      navigate("/");
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
