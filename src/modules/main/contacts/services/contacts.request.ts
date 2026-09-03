import type {
    ContactPayload,
    ContactResponse,
} from "../types/contact.types";

import { apiClient } from "@/shared/api/axios-config";
import { getErrorMessage } from "@/shared/lib/errorMsg";
import type { Response } from "@/shared/types/shared.types";

const getContacts = async () => {
    try {
        const res = await apiClient.get<ContactResponse>("/contacts", {
            withCredentials: true,
        });

        return res.data.contacts;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
};

const createContact = async (payload: ContactPayload) => {
    try {
        const res = await apiClient.post<Response>(
            "/contacts",
            payload,
            {
                withCredentials: true,
            }
        );

        return res.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
};

const deleteContact = async (id: string | number) => {
    try {
        const res = await apiClient.delete<Response>(`/contacts/${id}`, {
            withCredentials: true,
        });

        return res.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
};

const editContact = async (
    id: string | number,
    payload: ContactPayload
) => {
    try {
        const res = await apiClient.patch<Response>(
            `/contacts/${id}`,
            payload,
            {
                withCredentials: true,
            }
        );

        return res.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
};

export {
    getContacts,
    createContact,
    deleteContact,
    editContact,
};