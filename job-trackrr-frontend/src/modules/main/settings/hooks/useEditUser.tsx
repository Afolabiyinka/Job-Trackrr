import { useMutation } from "@tanstack/react-query";
import type { AuthUser, EditUserPayload } from "../types/types";
import { editUser } from "../services/request";
import useToastMessage from "@/lib/toastMsg";
import React from "react";
import { queryClient } from "@/constants/queryClient";

export const useEditUser = () => {
  const { toastError, toastSuccess } = useToastMessage();
  const [editData, setEditData] = React.useState<AuthUser>({
    email: "",
    username: "",
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: (payload: EditUserPayload) => editUser(payload),
    onSuccess: (data) => {
      toastSuccess(data.message);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toastError(err.message || "Something went wrong");
    },
  });
  function handleEdit() {
    mutate(editData);
  }
  return {
    handleEdit,
    editData,
    setEditData,
    loading: isPending,
    error,
  };
};
