import { AuthStore } from "../store/auth.store";
import { LoginRequest, LoginResponse } from "../types/login.type";
import { User } from "../types/user.type";

export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = AuthStore.getState().users;

      // First, find user by email (case-insensitive)
      const user = users.find(
        (user: User) => user.email.toLowerCase() === payload.email.toLowerCase()
      );

      // Check if user exists
      if (!user) {
        return reject({
          success: false,
          message:
            "Email not found. Please check your email or sign up for a new account.",
        });
      }

      // Check if password matches
      if (user.password !== payload.password) {
        return reject({
          success: false,
          message:
            "Incorrect password. Please try again or reset your password.",
        });
      }

      // Success
      resolve({
        success: true,
        message: "Login successful",
        user: user as User,
      });
    }, 1000);
  });
};
