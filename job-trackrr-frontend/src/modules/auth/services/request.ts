import { testingEndpoint } from "@/constants/api-data";
import type { LoginPayload, SignupPayload } from "../types/types";
import type { SuccessResponse } from "@/types/types";

const login = async (payload: LoginPayload): Promise<SuccessResponse> => {
  const res = await fetch(`${testingEndpoint}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  return data;
};

const signup = async (payload: SignupPayload): Promise<SuccessResponse> => {
  const res = await fetch(`${testingEndpoint}api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  return data;
};

export { login, signup };
