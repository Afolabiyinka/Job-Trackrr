import type { OnboardingPayload } from "../types/onboarding.types";
import { apiClient } from "@/shared/api/axios-config";

export async function onboardUser(payload: OnboardingPayload) {
    try {
        const res = await apiClient.patch(`/me/onboarding`, payload)
        return res.data
    } catch (err) { throw err; }
}