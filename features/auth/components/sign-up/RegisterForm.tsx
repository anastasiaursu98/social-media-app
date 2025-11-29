"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

import { AuthCard } from "../commun/AuthCard";
import { AuthFooter } from "../commun/AuthFooter";
import { InputField } from "../commun/InputField";

const registerSchema = z.object({
  first_name: z
    .string()
    .nonempty("First name is required")
    .min(1, "First name must be at least 1 character"),
  last_name: z
    .string()
    .nonempty("Last name is required")
    .min(1, "Last name must be at least 1 character"),
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
  password_confirmation: z
    .string()
    .nonempty("Password confirmation is required")
    .min(8, "Password confirmation must be at least 8 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = (data: RegisterSchema) => {
    // TODO: Implement registration logic
    console.log("Registration data:", data);
  };

  const onError = () => {
    // Handle form validation errors if needed
  };

  return (
    <AuthCard title="Create an account">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-4 w-full"
      >
        <InputField
          icon={<UserIcon className="w-4 h-4 text-gray-400" />}
          id="first_name"
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          {...register("first_name")}
          error={errors.first_name?.message}
        />
        <InputField
          icon={<UserIcon className="w-4 h-4 text-gray-400" />}
          id="last_name"
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          {...register("last_name")}
          error={errors.last_name?.message}
        />
        <InputField
          icon={<MailIcon className="w-4 h-4 text-gray-400" />}
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />
        <InputField
          icon={<LockIcon className="w-4 h-4 text-gray-400" />}
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          password={true}
          {...register("password")}
          error={errors.password?.message}
        />
        <InputField
          icon={<LockIcon className="w-4 h-4 text-gray-400" />}
          id="password_confirmation"
          label="Password Confirmation"
          type="password"
          placeholder="Enter your password confirmation"
          password={true}
          {...register("password_confirmation")}
          error={errors.password_confirmation?.message}
        />
        <Button
          type="submit"
          variant="destructive"
          size="lg"
          className="w-full"
        >
          Sign Up
        </Button>
        <AuthFooter
          text="Already have an account?"
          link={ROUTES.LOGIN}
          linkText="Sign in"
        />
      </form>
    </AuthCard>
  );
};
