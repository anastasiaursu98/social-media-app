"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PlusIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between px-6 py-4">
          <SidebarTrigger />
        </div>
        <div className="mr-6">
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-2 px-6 py-2"
          >
            <PlusIcon className="w-4 h-4" /> New Post
          </Button>
        </div>
      </div>
    </header>
  );
};
