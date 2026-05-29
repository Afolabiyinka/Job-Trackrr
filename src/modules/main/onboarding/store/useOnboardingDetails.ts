import { create } from "zustand";

interface OnboardingStore {
    linkedinUrl?: string;
    preferredRole?: string;
    skills: string[];
    skillInput: string

    setLinkedInUrl: (url: string) => void;
    setPreferredRole: (role: string) => void;
    setSkills: (skills: string[]) => void;
    setSkillInput: (skill: string) => void

    addSkill: (skill: string) => void;
    removeSkill: (skill: string) => void;

    reset: () => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
    linkedinUrl: "",
    preferredRole: "",
    skills: [],
    skillInput: "",

    setLinkedInUrl: (url) =>
        set({
            linkedinUrl: url,
        }),

    setPreferredRole: (role) =>
        set({
            preferredRole: role,
        }),

    setSkills: (skills) =>
        set({
            skills,
        }),
    setSkillInput: (skill) => set({
        skillInput: skill
    }),

    addSkill: (skill) =>
        set((state) => ({
            skills: [...state.skills, skill],
        })),

    removeSkill: (skill) =>
        set((state) => ({
            skills: state.skills.filter((s) => s !== skill),
        })),

    reset: () =>
        set({
            linkedinUrl: "",
            preferredRole: "",
            skills: [],
        }),
}));
