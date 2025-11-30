import { ProfileHeader } from "./personal-info/ProfileHeader";
import { ProfilePostsGrid } from "./profile-content/ProfilePostsGrid";
import { StoryHighlights } from "./story-highlights/StoryHighlights";

export const Profile = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 sm:space-y-6 w-full flex flex-col items-center">
        <ProfileHeader />
        <StoryHighlights />
        <ProfilePostsGrid />
      </div>
    </div>
  );
};
