import { Textarea } from "@/components/ui/textarea";
import { AvatarImage } from "@/components/shared/image/AvatarImage";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";
import { SmileIcon } from "lucide-react";
import { ProfileStore } from "../../store/profile.store";

export const AddDescription = () => {
  const description = ProfileStore((state) => state.description);
  const setDescription = ProfileStore((state) => state.setDescription);
  const maxLength = 2200;

  return (
    <div className="flex flex-col h-full">
      {/* User Info and Description */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3 mb-4">
          <AvatarImage
            src={DEFAULT_AVATAR_IMAGE}
            size={32}
            showAvatarImageButton={false}
          />
          <span className="text-sm font-semibold">ursu_anastasia_</span>
        </div>

        <div className="relative">
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={maxLength}
            placeholder="Add a description..."
            className="min-h-[200px] border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 resize-none"
          />
        </div>

        <div className="flex justify-between items-center mt-2">
          <button className=" text-gray-400 hover:text-gray-600">
            <SmileIcon className="w-5 h-5" />
          </button>
          <span className="text-xs text-gray-400">
            {description.length}/{maxLength}
          </span>
        </div>
      </div>
    </div>
  );
};
