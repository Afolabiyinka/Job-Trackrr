export type EditUserPayload = {
  email: string;
  username: string;
};

export interface AuthUser {
  username: string;
  email: string;
  onboarded?: boolean;
  linkedinUrl: string;
  preferredRole: string;
  skills: string[]
}
