import { Card } from "@/components/shared/Card";
import { AvatarImage } from "@/features/profile/components/personal-info/avatar-image/AvatarImage";
import { EditProfileButton } from "./EditProfileButton";
import { ProfileStats } from "./profile-status/ProfileStats";
import { ProfileDetails } from "./ProfileDetails";
import { SettingsButton } from "./SettingsButton";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";

export const ProfileHeader = () => {
  const username = "astasia_ursu";
  const avatarSrc = DEFAULT_AVATAR_IMAGE;
  return (
    <Card>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        {/* Avatar - centered on mobile, larger on desktop */}
        <div className="shrink-0 scale-100 sm:scale-125 origin-center sm:origin-top-left">
          <AvatarImage size={80} src={avatarSrc} />
        </div>

        <div className="flex flex-col gap-3 w-full sm:flex-1">
          {/* Header with username and buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 w-full">
            <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
              {username}
            </h1>
            <div className="flex items-center gap-2 sm:gap-4">
              <EditProfileButton />
              <SettingsButton />
            </div>
          </div>

          <div className="w-full">
            <ProfileStats posts={342} followers="12.5K" following={892} />
            <ProfileDetails
              fullName="Alexandra Rose"
              bio="Digital Creator & Lifestyle Blogger"
              location="Los Angeles, CA"
              job="Fashion & Travel Enthusiast"
              website="www.alexandrarose.com"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
