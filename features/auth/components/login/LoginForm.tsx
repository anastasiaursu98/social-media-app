"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockIcon, UserIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthCard } from "../commun/AuthCard";
import AuthLayout from "../commun/AuthLayout";
import { InputField } from "../commun/InputField";
import { FormActions } from "../FormActions";
import { DividerWithText } from "./DividerWithText";
import { OAuthButton } from "./OAuthButton";

import * as z from "zod";
import { AuthStore } from "../../store/auth.store";
import { User } from "../../types/login.type";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  remember_me: z.boolean().optional(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  const { login } = AuthStore();

  const onSubmit = (data: LoginSchema) => {
    console.log("onSubmit called with data:", data);
    const payload: User = {
      email: data.email,
      password: data.password,
    };
    console.log("Payload:", payload);
    login({
      user: payload,
    });
  };

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <AuthLayout>
      <AuthCard title="Sign In">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="space-y-4 w-full"
        >
          <InputField
            id="email"
            label="Email or Username"
            type="email"
            placeholder="Enter your email or username"
            icon={<UserIcon className="w-4 h-4 text-gray-400" />}
            {...register("email")}
            error={errors.email?.message}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={<LockIcon className="w-4 h-4 text-gray-400" />}
            password={true}
            {...register("password")}
            error={errors.password?.message}
          />
          <FormActions />
          <Button
            type="submit"
            variant="destructive"
            size="lg"
            className="w-full"
          >
            Sign In
          </Button>
          <DividerWithText />
          <OAuthButton
            icon={<FaGoogle className="w-4 h-4" style={{ color: "#4285F4" }} />}
            label="Continue with Google"
          />
          <OAuthButton
            icon={
              <FaFacebook className="w-4 h-4" style={{ color: "#1877F2" }} />
            }
            label="Continue with Facebook"
          />
        </form>
      </AuthCard>
    </AuthLayout>
  );
};
