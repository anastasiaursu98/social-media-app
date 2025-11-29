export type LoginRequest = {
  email: string;
  password: string;
  remember_me?: boolean;
};

export type User = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  role?: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  user: User;
};
