import { prodEndpoint } from "@/shared/constants/api-data";
import type { ContactPayload, ContactResponse } from "../types/contact.types";
import { apiClient } from "@/shared/api/axios-config";
import { getErrorMessage } from "@/shared/lib/errorMsg";



const getContacts = async () => {
    console.log("🔥 CONTACTS REQUEST");

    try {
        const res = await apiClient.get<ContactResponse>(`/contacts`, { withCredentials: true })
        return res.data.contacts
    }
    catch (err) {
        throw new Error(getErrorMessage(err))
    }
}

const createContact = async (payload: ContactPayload) => {
    const res = await fetch(`${prodEndpoint}/contacts/`, {
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

const deleteContact = async (id: string | number) => {

    const res = await fetch(`${prodEndpoint}/contacts/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }

    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }
    return data;
}

const editContact = async (id: string | number, payload: ContactPayload) => {
    const res = await fetch(`${prodEndpoint}/contacts/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)

    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }
    return data;
}

export { getContacts, createContact, deleteContact, editContact }
