import { useMutation } from "@tanstack/react-query";
import { deleteContact } from "../services/contacts.request";
import useToastMessage from "@/shared/lib/toastMsg";
import { queryClient } from "@/shared/api/queryClient";
import { queryKeys } from "@/shared/queryKeys";

export const useDeleteContact = ({ id }: { id: string | number }) => {

    const { toastError, toastSuccess } = useToastMessage()

    const { mutate, isPending } = useMutation({
        mutationFn: (id: string | number) => deleteContact(id),
        onSuccess: (data) => {
            toastSuccess(data.message)
            queryClient.invalidateQueries({
                queryKey: queryKeys.contacts
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