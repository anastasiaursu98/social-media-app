import {
  Home,
  Search,
  Compass,
  Play,
  Send,
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
  disabled?: boolean;
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
    disabled: true,
  },
  {
    title: "Explore",
    icon: Compass,
    href: "/explore",
    disabled: true,
  },
  {
    title: "Reels",
    icon: Play,
    href: "/reels",
    disabled: true,
  },
  {
    title: "Messages",
    icon: Send,
    href: "/messages",
    badge: "1",
    disabled: true,
  },
  {
    title: "Create",
    icon: Plus,
    href: "/create",
  },
];
