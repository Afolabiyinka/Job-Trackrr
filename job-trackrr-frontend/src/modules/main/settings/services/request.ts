import { testingEndpoint } from "@/constants/api-data";
import axios from "axios";
import type { EditUserPayload } from "../types/types";

const getUser = async () => {
  const res = await fetch(`${testingEndpoint}api/auth/user`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch user");
  }

  return data;
};

const editUser = async (payload: EditUserPayload) => {
  try {
    const res = await axios.put(
      `${testingEndpoint}api/auth/edit-user`,
      payload,
      {
        withCredentials: true,
      },
    );

    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update user");
  }
};

export { getUser, editUser };
