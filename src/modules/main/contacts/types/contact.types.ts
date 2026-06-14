export interface ContactPayload {
    id?: string | number
    name: string;
    role: string;
    email: string;
    phoneNumber: string | number;
    socialLinks: string[];
} 