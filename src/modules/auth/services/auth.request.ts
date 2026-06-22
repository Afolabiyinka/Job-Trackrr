import type { LoginPayload, SignupPayload } from "../types/auth.types";
import type { Response } from "@/shared/types/shared.types";
import { apiClient } from "@/shared/api/axios-config";



const login = async (payload: LoginPayload) => {
  try {
    const res = apiClient.post<Response>(`/auth/login`, payload)
    return (await res).data
  }
  catch (err) { throw err; }
}


const signup = async (payload: SignupPayload) => {
  try {
    const res = await apiClient.post<Response>(`/auth/signup`, payload)
    return res.data
  } catch (err) { throw err; }

}


const googleLogin = async (payload: { credential?: string }) => {
  try {
    const res = await apiClient.post<Response>("/auth/google", payload)
    return res.data
  }
  catch (err) { throw err; }

}

export { login, signup, googleLogin };
