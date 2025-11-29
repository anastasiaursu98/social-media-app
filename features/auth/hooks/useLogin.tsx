"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "../services/loginApi";
import { AuthStore } from "../store/auth.store";
import { ROUTES } from "@/constants/routes";
import { LoginSchema } from "../components/login/LoginForm";

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = AuthStore();

  const submit = async (data: LoginSchema) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await loginApi(data);

      if (response.success) {
        login(response.user, true);
        router.push(ROUTES.PROFILE);
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
