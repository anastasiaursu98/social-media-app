import { Button } from "@/components/ui/button";
import { EllipsisIcon, XIcon } from "lucide-react";
import { AvatarImage } from "@/components/shared/image/AvatarImage";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";

export const ViewSinglePostComents = () => {
  return (
    <div className="flex-1 p-4">
      <div className="flex items-center gap-2 border-b border-border pb-4 justify-between">
        <div className="flex items-center gap-2 justify-between">
          <AvatarImage
            src={DEFAULT_AVATAR_IMAGE}
            alt="User avatar"
            size={50}
            showAvatarImageButton={false}
          />
          <span className="text-sm font-medium">ursu_anastasia_</span>
        </div>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
          <EllipsisIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
