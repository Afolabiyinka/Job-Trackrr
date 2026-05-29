export interface OnboardingPayload {
    linkedinUrl?: string;
    preferredRole?: string;
    skills?: string[]
}

export interface StepProps {
    onNext: () => void;
}