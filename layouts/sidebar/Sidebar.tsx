"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { AppSidebarHeader } from "./SidebarHeader";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AppSidebarFooter } from "./SidebarFooter";
import { AppSidebarContents } from "./SidebarContents";

export const AppSidebar = () => {
  const { open } = useSidebar();
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className={cn("bg-white py-2", open ? "px-4" : "px-0")}
    >
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarContents />
      </SidebarContent>
      <SidebarFooter className="mb-4">
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
};
