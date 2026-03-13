import { prodEndpoint } from "@/shared/constants/api-data";
import { queryClient } from "@/shared/constants/queryClient";
import { useUser } from "@/modules/main/settings/store/useUser";
import { useNavigate } from "react-router-dom";
export const useLogout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      const res = await fetch(`${prodEndpoint}api/auth/logout`, {
        credentials: "include",
        method: "POST",
      });
      const data = res.json();
      logout();
      navigate("/");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      return data;
    } catch (err) {
      throw new Error();
    }
  }
  return { handleLogout };
};
