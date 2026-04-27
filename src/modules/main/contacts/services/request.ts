import { prodEndpoint } from "@/shared/constants/api-data";
import axios from "axios";
import type { ContactPayload } from "../types/types";
const getContacts = async (): Promise<ContactPayload[]> => {
    const res = await axios.get(`${prodEndpoint}api/contacts`, { withCredentials: true })
    return res.data.contacts
}

const createContact = async (payload: ContactPayload) => {
    const res = await fetch(`${prodEndpoint}api/contacts/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return data;
};

export { getContacts, createContact }
