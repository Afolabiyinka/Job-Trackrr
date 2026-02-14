import { create } from "zustand";
import type { AuthUser } from "../types/types";

interface UserStore {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  logout: () => {
    set({ user: null });
  },
}));
