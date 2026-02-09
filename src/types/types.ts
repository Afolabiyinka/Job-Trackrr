import type { AuthUser } from "@/modules/main/settings/types/types";

export interface SuccessResponse {
  message: string;
  token: string;
  user: AuthUser;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  error: string;
}
