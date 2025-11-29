import { Card } from "@/components/shared/Card";
import { AvatarImage } from "@/features/profile/components/personal-info/avatar-image/AvatarImage";
import { EditProfileButton } from "./EditProfileButton";
import { ProfileStats } from "./profile-status/ProfileStats";
import { ProfileDetails } from "./ProfileDetails";
import { SettingsButton } from "./SettingsButton";

export const ProfileHeader = () => {
  const username = "astasia_ursu";
  const avatarSrc =
    "https://img.freepik.com/free-photo/portrait-curly-woman-blouse-denim-skirt-showing-peace-sign-orange-background_197531-14867.jpg?semt=ais_hybrid&w=740&q=80";
  return (
    <Card>
      <div className="flex items-start gap-6">
        <AvatarImage size={100} src={avatarSrc} />

        <div className="flex flex-col gap-3">
          <div className="flex-1 flex items-center gap-4">
            <h1 className="text-2xl font-bold">{username}</h1>
            <EditProfileButton />
            <SettingsButton />
          </div>
          <div>
            <ProfileStats posts={342} followers="12.5K" following={892} />
            <ProfileDetails
              fullName="Alexandra Rose"
              bio="Digital Creator & Lifestyle Blogger ✨"
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
