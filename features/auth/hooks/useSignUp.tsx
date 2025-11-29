"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUpApi } from "../services/signUpApi";
import { AuthStore } from "../store/auth.store";
import { ROUTES } from "@/constants/routes";
import { RegisterSchema } from "../components/sign-up/RegisterForm";

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { registerUser } = AuthStore();
  const router = useRouter();
  const submit = async (data: RegisterSchema) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await signUpApi(data);
      console.log("response", response);
      if (response.success) {
        registerUser(response.user);
        router.push(ROUTES.LOGIN);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return { submit, isLoading, error };
};
