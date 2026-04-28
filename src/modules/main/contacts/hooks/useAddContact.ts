import { useMutation } from "@tanstack/react-query"
import type { ContactPayload } from "../types/types"
import { createContact } from "../services/request"
import { queryClient } from "@/shared/constants/queryClient"
import useToastMessage from "@/shared/lib/toastMsg"
import { useState } from "react"

export const useAddContact = () => {

    const [contactData, setContactData] = useState<ContactPayload>({
        email: "",
        name: "",
        phoneNumber: 0,
        role: "",
        socialLinks: [],
    })
    const { toastError, toastSuccess } = useToastMessage()
    const { isPending, mutate } = useMutation({
        mutationFn: (payload: ContactPayload) => createContact(payload),
        onSuccess: (data) => {
            toastSuccess(data.message || "Contact Added")
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
        },
        onError: (err) => {
            toastError(err.message || "Contact removed")
        }
    })
    return { mutate, isPending, contactData, setContactData }
}