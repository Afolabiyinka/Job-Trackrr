export type EditUserPayload = {
  email: string;
  username: string;
};

export interface AuthUser {
  username: string;
  email: string;
  [key: string]: any
}
