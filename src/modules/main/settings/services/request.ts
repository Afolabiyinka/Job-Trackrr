import { prodEndpoint, testingEndpoint } from "@/constants/api-data";
import axios from "axios";
import type { EditUserPayload } from "../types/types";

const getUser = async () => {
  try {
    const res = await fetch(`${prodEndpoint}api/auth/check-auth`, {
      credentials: "include",
    });

    if (!res.ok) return null;

    return await res.json();
  } catch {
    return null;
  }
};

const editUser = async (payload: EditUserPayload) => {
  try {
    const res = await axios.put(`${prodEndpoint}api/auth/edit-user`, payload, {
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update user");
  }
};

const deleteAccount = async () => {
  try {
    const res = await axios.delete(`${prodEndpoint}api/auth/delete`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    throw new Error("Failed to delete Account");
  }
};

export { getUser, editUser, deleteAccount };
