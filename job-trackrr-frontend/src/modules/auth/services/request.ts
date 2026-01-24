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
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const signup = async (payload: SignupPayload): Promise<SuccessResponse> => {
  const res = await fetch(`${testingEndpoint}api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

export { login, signup };
