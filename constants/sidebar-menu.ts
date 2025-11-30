import {
  Home,
  Search,
  Compass,
  Play,
  Send,
  Heart,
  Plus,
  LucideIcon,
} from "lucide-react";
import { ROUTES } from "./routes";

export interface SidebarMenuItem {
  title: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  hasBadge?: boolean;
}

export const SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
  {
    title: "Home",
    icon: Home,
    href: ROUTES.HOME_PAGE,
  },
  {
    title: "Search",
    icon: Search,
    href: "/search",
  },
  {
    title: "Explore",
    icon: Compass,
    href: "/explore",
  },
  {
    title: "Reels",
    icon: Play,
    href: "/reels",
  },
  {
    title: "Messages",
    icon: Send,
    href: "/messages",
    badge: "1",
  },
  {
    title: "Notifications",
    icon: Heart,
    href: "/notifications",
    hasBadge: true,
  },
  {
    title: "Create",
    icon: Plus,
    href: "/create",
  },
];
