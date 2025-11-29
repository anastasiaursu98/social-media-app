// src/services/mockUsers.ts
import { User } from "../types/login.type";

export type MockUser = User & { password: string };

export const mockUsers: MockUser[] = [
  {
    id: "1",
    name: "Anastasia Ursu",
    email: "test1@gmail.com",
    password: "Test1234567!",
    role: "user",
  },
  {
    id: "2",
    name: "Mihai Ursu",
    email: "test2@gmail.com",
    password: "Test1234567!",
    role: "admin",
  },
  {
    id: "3",
    name: "Cristina Ursu",
    email: "test3@gmail.com",
    password: "Test1234567!",
    role: "user",
  },
];
