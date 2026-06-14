import useToastMessage from "@/shared/lib/toastMsg";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deleteAccount } from "../services/user.request";
import { useLogout } from "@/modules/auth/hooks/useLogout";

export const useDeleteAccount = () => {
  const { toastError, toastSuccess } = useToastMessage();
  const { logoutMutate } = useLogout();
  const deletePhrase = "delete-my-account";
  const [deleteInput, setDeleteInput] = useState("");

  const { isPending, mutate } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toastSuccess("Account deleted successfully");
      logoutMutate();
    },
    onError: (err: any) => {
      toastError(err.message || "Failed to delete account");
    },
  });

  function handleDelete() {
    if (deleteInput.trim() !== deletePhrase) {
      toastError("Confirmation phrase doesn't match");
      return;
    }
    mutate();
  }

  return {
    handleDelete,
    loading: isPending,
    deleteInput,
    setDeleteInput,
    deletePhrase,
  };
};
