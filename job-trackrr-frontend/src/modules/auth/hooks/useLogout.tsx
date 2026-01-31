import { testingEndpoint } from "@/constants/api-data";
import { useUser } from "@/modules/main/settings/store/useUser";
import axios from "axios";
export const useLogout = () => {
  const { logout } = useUser();
  async function handleLogout() {
    const res = await axios.post(`${testingEndpoint}api/auth/logout`, {});
    return res;
    logout();
  }
  return { handleLogout };
};
