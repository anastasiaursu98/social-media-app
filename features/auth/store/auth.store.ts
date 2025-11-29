import { create } from "zustand";
import { LoginResponse, User } from "../types/login.type";

interface AuthStateInterface {
  user: User | null;
  isAuthenticated: boolean;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

export const AuthStore = create<AuthStateInterface>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (data: LoginResponse) => {
    set({ isAuthenticated: true, user: data.user });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));
