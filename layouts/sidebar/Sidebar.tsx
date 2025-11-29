"use client";

import { ROUTES } from "@/constants/routes";
import {
  Bookmark,
  Clock,
  Compass,
  Film,
  Heart,
  Home,
  Plus,
  Search,
  Send,
  Settings,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigationItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: Film, label: "Reels", href: "/reels" },
  { icon: Send, label: "Messages", href: "/messages", badge: 3 },
  { icon: Heart, label: "Notifications", href: "/notifications", badge: 12 },
  { icon: Plus, label: "Create Post", href: "/create" },
  { icon: User, label: "Profile", href: ROUTES.PROFILE },
];

const settingsItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Clock, label: "Your Activity", href: "/activity" },
  { icon: Bookmark, label: "Saved", href: "/saved" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold font-kaushan-script">
          <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            StoryLine
          </span>
        </h1>
      </div>
    </aside>
  );
};
