"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LockIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthCard } from "../commun/AuthCard";
import { InputField } from "../commun/InputField";
import { DividerWithText } from "./DividerWithText";
import { FormActions } from "./FormActions";
import { OAuthButton } from "./OAuthButton";

import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { loginApi } from "../../services/loginApi";
import { AuthStore } from "../../store/auth.store";
import { AuthFooter } from "../commun/AuthFooter";
import { useLogin } from "../../hooks/useLogin";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Please enter a valid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  remember_me: z.boolean().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { submit, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember_me: false },
  });

  const onSubmit = (data: LoginSchema) => {
    submit(data);
  };

  return (
    <AuthCard title="Sign In" error={error}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        <InputField
          disabled={isLoading}
          id="email"
          label="Email or Username"
          type="email"
          placeholder="Enter your email or username"
          icon={<UserIcon className="w-4 h-4 text-gray-400" />}
          {...register("email")}
          error={errors.email?.message}
        />
        <InputField
          disabled={isLoading}
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<LockIcon className="w-4 h-4 text-gray-400" />}
          password={true}
          {...register("password")}
          error={errors.password?.message}
        />
        <FormActions disabled={isLoading} />
        <Button
          disabled={isLoading}
          type="submit"
          variant="destructive"
          size="lg"
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
        <DividerWithText />
        <OAuthButton
          icon={<FaGoogle className="w-4 h-4" style={{ color: "#4285F4" }} />}
          label="Continue with Google"
        />
        <OAuthButton
          icon={<FaFacebook className="w-4 h-4" style={{ color: "#1877F2" }} />}
          label="Continue with Facebook"
        />
        <AuthFooter
          text="Don't have an account?"
          link={ROUTES.REGISTER}
          linkText="Sign up"
        />
      </form>
    </AuthCard>
  );
};
