import useToastMessage from "@/shared/lib/toastMsg";
import { useNavigate } from "react-router-dom";
import { onboardUser } from "../services/onboarding.request";
import type { OnboardingPayload } from "../types/onboarding.types";
import { queryClient } from "@/shared/constants/queryClient";
import { getErrorMessage } from "@/shared/lib/errorMsg";
import { useMutation } from "@tanstack/react-query";

export const useOnboarding = () => {
    const { toastError, toastSuccess } = useToastMessage();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: (payload: OnboardingPayload) => onboardUser(payload),

        onSuccess: (data) => {
            toastSuccess(data.message);

            queryClient.invalidateQueries({
                queryKey: ["user"],
            });

            navigate("/dashboard");
        },

        onError: (err) => {
            toastError(getErrorMessage(err));
        },
    });

    return { handleOnboard: mutate, isPending };
};