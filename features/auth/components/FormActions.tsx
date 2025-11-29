import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export const FormActions = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Checkbox id="remember-me" />
        <span className="text-sm font-normal text-gray-500">Remember me</span>
      </div>
      <Link
        href="/forgot-password"
        className="text-sm font-normal text-purple-600 hover:text-purple-700"
      >
        Forgot password?
      </Link>
    </div>
  );
};
