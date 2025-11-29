import { create } from "zustand";
import { User } from "../types/user.type";

export const STORAGE_KEY = "registered_users";
export const CURRENT_USER_KEY = "current_user";
interface AuthStateInterface {
  user: User | null;
  users: User[];
  isAuthenticated: boolean;
  login: (user: User, isAuthenticated: boolean) => void;
  logout: () => void;
  registerUser: (user: User) => void;
  loadUsersFromStorage: () => void;
}

// Helper function to save users to localStorage
const saveUsersToStorage = (users: User[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }
};

// Helper function to load users from localStorage
const loadUsersFromStorage = (): User[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error("Error parsing users from localStorage:", error);
        return [];
      }
    }
  }
  return [];
};

// Helper function to load current user from localStorage
const loadCurrentUserFromStorage = (): User | null => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error("Error parsing current user from localStorage:", error);
        return null;
      }
    }
  }
  return null;
};

export const AuthStore = create<AuthStateInterface>((set, get) => {
  const currentUser = loadCurrentUserFromStorage();
  return {
    user: currentUser,
    users: loadUsersFromStorage(),
    isAuthenticated: !!currentUser,
    login: (user: User, isAuthenticated: boolean) => {
      set({ isAuthenticated: isAuthenticated, user: user });
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    },
    logout: () => {
      set({ isAuthenticated: false, user: null });
      localStorage.removeItem(CURRENT_USER_KEY);
    },
    registerUser: (user: User) => {
      const currentUsers = get().users;
      // Check if user already exists (by email)
      const userExists = currentUsers.some(
        (u) => u.email.toLowerCase() === user.email.toLowerCase()
      );

      if (!userExists) {
        const newUser: User = {
          ...user,
          id:
            user.id ||
            `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        };
        const updatedUsers = [...currentUsers, newUser];
        set({ users: updatedUsers });
        saveUsersToStorage(updatedUsers);
      } else {
        throw new Error("User with this email already exists");
      }
    },
    loadUsersFromStorage: () => {
      const users = loadUsersFromStorage();
      set({ users });
    },
  };
});
