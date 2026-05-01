import { create } from "zustand";
import type { AuthUser } from "../types/types";

interface UserStore {
  user: AuthUser | null;
  isAuthResolved: boolean;

  setUser: (user: AuthUser | null) => void;
  setAuthResolved: (value: boolean) => void;

  logout: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  isAuthResolved: false,
  setUser: (u) => set({ user: u }),
  setAuthResolved: (value) => {
    set({ isAuthResolved: value });
  },
  logout: () => {
    set({ user: null });
  },
}));
