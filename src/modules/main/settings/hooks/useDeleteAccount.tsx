import useToastMessage from "@/lib/toastMsg";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../services/request";
import { useUser } from "../store/useUser";

export const useDeleteAccount = () => {
  const { toastError, toastSuccess } = useToastMessage();
  const { logout } = useUser();
  const navigate = useNavigate();
  const deletePhrase = "delete-my-account";
  const [deleteInput, setDeleteInput] = useState("");

  const { isPending, mutate } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toastSuccess("Account deleted successfully");
      logout();
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
