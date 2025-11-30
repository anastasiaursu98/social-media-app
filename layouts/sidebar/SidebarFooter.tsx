import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AuthStore } from "@/features/auth/store/auth.store";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export const AppSidebarFooter = () => {
  const { open } = useSidebar();
  const router = useRouter();
  const { logout } = AuthStore();
  const handleLogout = () => {
    logout();
    router.push(ROUTES.LOGIN);
  };
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        className={cn("w-full flex items-center justify-center cursor-pointer")}
        onClick={handleLogout}
      >
        {open ? (
          <span className="flex items-center justify-center gap-2 text-gray-600">
            Logout <LogOutIcon className="w-4 h-4" />
          </span>
        ) : (
          <span>
            <LogOutIcon className="w-4 h-4" />
          </span>
        )}
      </Button>
    </div>
  );
};
