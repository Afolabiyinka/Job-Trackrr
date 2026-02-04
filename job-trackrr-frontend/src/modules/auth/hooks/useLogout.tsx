import { testingEndpoint } from "@/constants/api-data";
import { useUser } from "@/modules/main/settings/store/useUser";
export const useLogout = () => {
  const { logout } = useUser();
  async function handleLogout() {
    try {
      const res = await fetch(`${testingEndpoint}api/auth/logout`, {
        credentials: "include",
        method: "POST",
      });
      const data = res.json();
      logout();
      return data;
    } catch (err) {
      throw new Error();
    }
  }
  return { handleLogout };
};
