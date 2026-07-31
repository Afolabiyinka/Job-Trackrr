import { useQuery } from "@tanstack/react-query"
import { getContacts } from "../services/contacts.request"
import { type ContactPayload } from "../types/contact.types"

export const useGetContacts = () => {

    const { data, error, isLoading, isError, refetch } = useQuery<ContactPayload[]>({
        queryKey: ["contacts"],
        queryFn: getContacts,

    })
    return {
        contacts: data ?? [], error, isLoading, isError, refetch
    }
}