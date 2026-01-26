import { testingEndpoint } from "@/constants/api-data";

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

export { getUser };
