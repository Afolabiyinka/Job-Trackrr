import { useMutation } from "@tanstack/react-query";
import { deleteContact } from "../services/request";
import useToastMessage from "@/shared/lib/toastMsg";
import { queryClient } from "@/shared/constants/queryClient";

export const useDeleteContact = ({ id }: { id: string | number }) => {

    const { toastError, toastSuccess } = useToastMessage()

    const { mutate, isPending } = useMutation({
        mutationFn: (id: string | number) => deleteContact(id),
        onSuccess: (data) => {
            toastSuccess(data.message)
            queryClient.invalidateQueries({
                queryKey: ["contacts"]
            })
        },
        onError: (err) => toastError(err.message || "Something went wrong")
    })

    function handleDelete() {
        mutate(id)
    }

    return {
        handleDelete,
        isPending
    }
}