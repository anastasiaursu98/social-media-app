import { ProfileHeader } from "./personal-info/ProfileHeader";
import { StoryHighlights } from "./story-highlights/StoryHighlights";
export const ProfileContent = () => {
  return (
    <div className="space-y-6 w-full flex flex-col items-center">
      <ProfileHeader />
      <StoryHighlights />
    </div>
  );
};
