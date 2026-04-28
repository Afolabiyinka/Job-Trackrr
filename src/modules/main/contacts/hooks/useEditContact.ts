import { useMutation } from "@tanstack/react-query"
import { editContact } from "../services/request"
import { queryClient } from "@/shared/constants/queryClient"
import useToastMessage from "@/shared/lib/toastMsg"
import type { ContactPayload } from "../types/types"

export const useEditContact = () => {
    const { toastError, toastSuccess } = useToastMessage()

    const { mutateAsync, isPending: loading } = useMutation({
        mutationFn: ({ id, payload }: { id: string | number; payload: ContactPayload }) =>
            editContact(id, payload),
        onSuccess: (data) => {
            toastSuccess(data.message || "Contact updated")
            queryClient.invalidateQueries({ queryKey: ["contacts"] })
        },
        onError: (err: any) => {
            toastError(err.message || "Something went wrong")
        },
    })

    async function handleEdit({
        id,
        payload,
    }: {
        id: string | number
        payload: ContactPayload
    }): Promise<boolean> {
        try {
            await mutateAsync({ id, payload })
            return true
        } catch {
            return false
        }
    }

    return { handleEdit, loading }
}
