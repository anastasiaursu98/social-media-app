import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { AuthCard } from "../commun/AuthCard";
import { AuthFooter } from "../commun/AuthFooter";
import AuthLayout from "../commun/AuthLayout";
import { InputField } from "../commun/InputField";

export const RegisterForm = () => {
  return (
    <AuthLayout>
      <AuthCard title="Sign Up">
        <form className="space-y-4 w-full">
          <InputField
            icon={<UserIcon className="w-4 h-4 text-gray-400" />}
            id="first_name"
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />
          <InputField
            icon={<UserIcon className="w-4 h-4 text-gray-400" />}
            id="last_name"
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
          <InputField
            icon={<MailIcon className="w-4 h-4 text-gray-400" />}
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <InputField
            icon={<LockIcon className="w-4 h-4 text-gray-400" />}
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            password={true}
          />
          <InputField
            icon={<LockIcon className="w-4 h-4 text-gray-400" />}
            id="password_confirmation"
            label="Password Confirmation"
            type="password"
            placeholder="Enter your password confirmation"
            password={true}
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
    </AuthLayout>
  );
};
