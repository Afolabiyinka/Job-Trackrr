import { prodEndpoint } from "@/shared/constants/api-data";
import type { LoginPayload, SignupPayload } from "../types/types";
import type { Response } from "@/shared/types/types";
import type { GoogleCredentialResponse } from "@react-oauth/google";
import axios from "axios";

const login = async (payload: LoginPayload): Promise<Response> => {
  const res = await fetch(`${prodEndpoint}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const signup = async (payload: SignupPayload): Promise<Response> => {
  const res = await fetch(`${prodEndpoint}api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });
  const data = await res.json();

  if (!res.ok) {
    const message = data?.message || "Login failed";
    throw new Error(message);
  }

  return data;
};


const googleLogin = async (payload: { credential?: string }): Promise<Response> => {
  const res = await fetch(`${prodEndpoint}api/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      credential: payload.credential,
    }),
    credentials: "include"
  });

  const data = res.json()
  return data
};
export { login, signup, googleLogin };
