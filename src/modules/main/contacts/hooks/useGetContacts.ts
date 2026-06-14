import { useQuery } from "@tanstack/react-query"
import { getContacts } from "../services/contacts.request"

export const useGetContacts = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: ["contacts"],
        queryFn: getContacts,
        retry: false,
        refetchOnWindowFocus: false,
    })
    return { contacts: data ?? [], error, isLoading }
}