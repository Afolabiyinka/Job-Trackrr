import type { GoogleCredentialResponse } from "@react-oauth/google"
import { useMutation } from "@tanstack/react-query"
import { googleLogin } from "../services/request"
import useToastMessage from "@/shared/lib/toastMsg"
import { getErrorMessage } from "@/shared/lib/errorMsg"
import { queryClient } from "@/shared/constants/queryClient"
import { useNavigate } from "react-router-dom"

export const useGoogleLogin = () => {
    const { toastError, toastSuccess } = useToastMessage();
    const navigate = useNavigate()

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: GoogleCredentialResponse) =>
            googleLogin({ credential: payload.credential }),

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
            toastSuccess(data.message);
            navigate("/dashboard")

        },

        onError: (err) => {
            toastError(getErrorMessage(err));
        },
    });

    function handleGoogleLogin(payload: GoogleCredentialResponse) {
        mutate(payload);
    }

    return { handleGoogleLogin, googleLoading: isPending };
};