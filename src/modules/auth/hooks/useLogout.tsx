import { prodEndpoint } from "@/shared/constants/api-data";
import { queryClient } from "@/shared/constants/queryClient";
import { useUser } from "@/modules/main/settings/store/useUser";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const { mutate: logoutMutate, isPending: logoutLoading } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${prodEndpoint}api/auth/logout`, {
        credentials: "include",
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Logout failed");
      }

      return await res.json();
    },

    onSuccess: () => {

      logout()
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err) => {
      console.error(err);
    },
  });
  return {
    logoutMutate, logoutLoading
  }

};