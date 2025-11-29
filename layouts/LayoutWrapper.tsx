"use client";

import { ROUTES } from "@/constants/routes";
import { AuthStore } from "@/features/auth/store/auth.store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MainLayout } from "./MainLayout";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = AuthStore();
  const [isChecking, setIsChecking] = useState(true);
  const isAuthPage = pathname?.startsWith("/auth");

  useEffect(() => {
    // Wait for client-side hydration to complete
    setIsChecking(false);
  }, []);

  useEffect(() => {
    if (!isChecking) {
      // If user is not authenticated and trying to access protected route
      if (!user && !isAuthPage) {
        router.push(ROUTES.LOGIN);
      }
      // If user is authenticated and trying to access auth pages, redirect to home
      if (user && isAuthPage) {
        router.push(ROUTES.HOME_PAGE);
      }
    }
  }, [user, isChecking, isAuthPage, router]);

  // Show nothing while checking or if not authenticated on protected route
  if (isChecking) {
    return null;
  }

  if (!user && !isAuthPage) {
    return null;
  }

  if (isAuthPage) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
}
