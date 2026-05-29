import { prodEndpoint } from "@/shared/constants/api-data";
import type { OnboardingPayload } from "../types/onboarding.types";

export async function onboardUser(payload: OnboardingPayload) {
    const res = await fetch(`${prodEndpoint}api/me/onboarding`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message ?? "Failed to complete onboarding");
    }

    return res.json();
}