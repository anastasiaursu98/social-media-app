import { Card } from "@/components/shared/Card";
import { AvatarImage } from "@/components/shared/image/AvatarImage";
import { EditProfileButton } from "./EditProfileButton";
import { ProfileStats } from "./profile-status/ProfileStats";
import { ProfileDetails } from "./ProfileDetails";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";

export const ProfileHeader = () => {
  const username = "astasia_ursu";
  const avatarSrc = DEFAULT_AVATAR_IMAGE;
  return (
    <Card>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
        {/* Avatar - responsive sizing for all devices */}
        <div className="shrink-0">
          <AvatarImage 
            size={100} 
            src={avatarSrc} 
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
          />
        </div>

        <div className="flex flex-col gap-4 w-full lg:flex-1">
          {/* Header with username and buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-center sm:text-left">
              {username}
            </h1>
            <div className="flex items-center gap-2 sm:gap-3">
              <EditProfileButton />
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
