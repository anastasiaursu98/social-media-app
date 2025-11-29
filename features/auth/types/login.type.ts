export type LoginRequest = {
  email: string;
  password: string;
  remember_me: boolean;
};

export type User = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
};
