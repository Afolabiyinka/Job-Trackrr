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

export interface AuthUser {
  username: string;
  email: string;
  profilePic: string;
}
