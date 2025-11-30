import { AvatarImage } from "@/components/shared/image/AvatarImage";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AppLogo } from "@/components/shared/AppLogo";

export const AppSidebarHeader = () => {
  const router = useRouter();
  const { open, openMobile, isMobile } = useSidebar();

  const handleViewProfile = () => router.push("/profile");
  const handleGoHome = () => router.push("/");

  const shouldShowContent = isMobile ? openMobile : open;

  return (
    <div className="space-y-6">
      {/* Logo */}
      <div className="h-14 flex items-center">
        {shouldShowContent ? (
          <AppLogo size="sm" onClick={handleGoHome} />
        ) : null}
      </div>

      {/* User Profile */}
      <div
        className={cn(
          "flex items-center",
          shouldShowContent
            ? "bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm gap-4 rounded-lg p-3"
            : "bg-none"
        )}
      >
        <AvatarImage
          src={DEFAULT_AVATAR_IMAGE}
          alt="logo"
          size={shouldShowContent ? 50 : 30}
          hasStory={true}
          showAvatarImageButton={false}
        />

        {shouldShowContent && (
          <div className="flex flex-col flex-1">
            <h2 className="text-base font-bold text-gray-800 lowercase">
              alexandra.rose
            </h2>
            <span
              className="text-sm text-gray-500 font-normal cursor-pointer"
              onClick={handleViewProfile}
            >
              View Profile
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
