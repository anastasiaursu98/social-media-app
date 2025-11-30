"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { SIDEBAR_MENU_ITEMS } from "@/constants/sidebar-menu";
import { cn } from "@/lib/utils";

export const AppSidebarContents = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {SIDEBAR_MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <SidebarMenuItem
              key={item.title}
              className="py-2 text-md text-gray-600 font-medium text-center"
            >
              <SidebarMenuButton
                isActive={isActive}
                tooltip={item.title}
                onClick={() => router.push(item.href)}
                className={cn("gap-3", isActive && "font-bold text-gray-900")}
              >
                <Icon
                  className={cn(
                    "w-7 h-7 transition-all",
                    isActive ? "text-gray-900 " : "text-gray-600"
                  )}
                  strokeWidth={isActive ? 2.5 : 2.5}
                />
                <span
                  className={cn(isActive ? "text-gray-900" : "text-gray-600")}
                >
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};
