export type EditUserPayload = {
  email: string;
  username: string;
};

export interface AuthUser {
  username: string;
  email: string;
  onboarded: boolean;
  [key: string]: any
}
