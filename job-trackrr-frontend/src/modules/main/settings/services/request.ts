import { testingEndpoint } from "@/constants/api-data";
import { useUser } from "../store/useUser";

const token = useUser.getState().token;
const getUser = async () => {
  const res = await fetch(`${testingEndpoint}api/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.json();
  if (!res.ok) {
    window.location.href === "/auth/login";
  }
  return data;
};

export { getUser };
