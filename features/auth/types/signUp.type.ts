import { User } from "./user.type";

export type SignUpRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  success: boolean;
  message: string;
  user: User;
};
