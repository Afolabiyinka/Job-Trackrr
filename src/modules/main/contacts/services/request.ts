import { prodEndpoint } from "@/shared/constants/api-data";
import axios from "axios";
import type { ContactPayload } from "../types/types";
const getContacts = async (): Promise<ContactPayload[]> => {
    const res = await axios.get(`${prodEndpoint}api/contacts`, { withCredentials: true })
    return res.data.contacts
}

const createContact = async (payload: ContactPayload) => {
    const res = await fetch(`${prodEndpoint}api/contacts/`, {
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

    const res = await fetch(`${prodEndpoint}api/contacts/${id}`, {
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
    const res = await fetch(`${prodEndpoint}api/contacts/${id}`, {
        method: "PUT",
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
