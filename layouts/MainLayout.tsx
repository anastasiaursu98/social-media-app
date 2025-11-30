"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./header/Header";
import { AppSidebar } from "./sidebar/Sidebar";
import { cn } from "@/lib/utils";

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main
          className={cn("flex-1 overflow-y-auto py-8", "px-2 md:px-4 lg:px-12")}
        >
          {children}
        </main>
      </SidebarInset>
    </>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarProvider>
        <MainLayoutContent>{children}</MainLayoutContent>
      </SidebarProvider>
    </div>
  );
}
