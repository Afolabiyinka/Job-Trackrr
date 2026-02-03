import { create } from "zustand";
import type { AuthUser } from "../types/types";

interface UserStore {
  user: AuthUser | null;
  setUser: (user: AuthUser) => void;
  logout: () => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  logout: () => {
    set({ user: null });
  },
  loading: false,
  setLoading: (l) => set({ loading: l }),
}));
