import { LoginRequest, LoginResponse, User } from "../types/login.type";
import { mockUsers } from "./mockUsers";

export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (user: User) =>
          user.email === payload.email && user.password === payload.password
      );
      const invalidPassword = user?.password !== payload.password;
      const invalidEmail = user?.email !== payload.email;

      if (invalidPassword) {
        return reject({ success: false, message: "Invalid password" });
      }

      if (invalidEmail) {
        return reject({ success: false, message: "Invalid email" });
      }

      resolve({
        success: true,
        message: "Login successful",
        user: user as User,
      });
    }, 1000);
  });
};
