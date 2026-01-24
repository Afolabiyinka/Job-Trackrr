import type { AuthUser } from "@/types/types";
import { create } from "zustand";

interface UserStore {
  user: AuthUser | null;
  setUser: (user: AuthUser) => void;
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
}
function getToken() {
  const stored = localStorage.getItem("token");
  return stored ? JSON.parse(stored) : "";
}
export const useUser = create<UserStore>((set) => ({
  token: getToken(),
  setToken: (t) => {
    set({ token: t });
    localStorage.setItem("token", JSON.stringify(t));
  },
  user: null,
  setUser: (u) => set({ user: u }),
  logout: () => {
    localStorage.clear();
    set({ user: null });
  },
  loading: false,
  setLoading: (l) => set({ loading: l }),
}));
