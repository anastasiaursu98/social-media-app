import { create } from "zustand";
import { User } from "../types/login.type";

interface AuthStateInterface {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User, isAuthenticated: boolean) => void;
  logout: () => void;
}

export const AuthStore = create<AuthStateInterface>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user: User, isAuthenticated: boolean) => {
    set({ isAuthenticated: isAuthenticated, user: user });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));
