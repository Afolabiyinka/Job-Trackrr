import type { AuthUser, EditUserPayload } from "../types/user.types";
import { apiClient } from "@/shared/api/axios-config";



export interface UserResponse {
  user: AuthUser
}
const getUser = async () => {
  try {
    const res = await apiClient.get<UserResponse>(`/me`)
    return res.data
  }
  catch (err) { throw err; }
}



const editUser = async (payload: EditUserPayload) => {
  try {
    const res = await apiClient.put(`/me`, payload)
    return res.data
  } catch (err) { throw err; }

}

const deleteAccount = async () => {
  try {
    const res = await apiClient.delete(`/me`);
    return res.data;
  } catch (err) { throw err; }

};

export { getUser, editUser, deleteAccount };
