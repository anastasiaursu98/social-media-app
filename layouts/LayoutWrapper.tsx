"use client";

import { usePathname } from "next/navigation";
import { MainLayout } from "./MainLayout";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  if (isAuthPage) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
}
