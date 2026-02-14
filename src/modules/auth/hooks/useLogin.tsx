import React from "react";
import type { LoginPayload } from "../types/types";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/request";
import useToastMessage from "@/lib/toastMsg";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/constants/queryClient";
import { toast } from "sonner";
export const useLogin = () => {
  const [loginData, setLoginData] = React.useState<LoginPayload>({
    email: "",
    password: "",
  });

  const { toastError, toastSuccess } = useToastMessage();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toastSuccess(data.message);
      navigate("/");
    },
    onError: (error) => {
      toast(``);
      // toastError(error.message || "Something went wrong");
    },
  });

  function handleLogin() {
    mutate(loginData);
  }
  return {
    handleLogin,
    loading: isPending,
    setLoginData,
    loginData,
  };
};
