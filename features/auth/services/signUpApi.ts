import { AuthStore } from "../store/auth.store";
import { SignUpRequest, SignUpResponse } from "../types/signUp.type";
import { User } from "../types/user.type";

export const signUpApi = async (
  data: SignUpRequest
): Promise<SignUpResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userExists = AuthStore.getState().users.some(
        (user: User) => user.email === data.email
      );
      if (userExists) {
        return reject({ success: false, message: "User already exists" });
      }
      resolve({
        success: true,
        message: "User created successfully",
        user: data as User,
      });
    }, 1000);
  });
};
