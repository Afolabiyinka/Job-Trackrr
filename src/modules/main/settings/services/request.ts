import { prodEndpoint } from "@/shared/constants/api-data";
import axios from "axios";
import type { EditUserPayload } from "../types/types";

const getUser = async () => {
  try {
    const res = await fetch(`${prodEndpoint}api/user`, {
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
    const res = await axios.put(`${prodEndpoint}api/user`, payload, {
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
    const res = await axios.delete(`${prodEndpoint}api/user`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    throw new Error("Failed to delete Account");
  }
};

export { getUser, editUser, deleteAccount };
