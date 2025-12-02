import { AllImagesPost } from "../../types/profile.type";
import Image from "next/image";

interface ProfileImageListProps {
  items: AllImagesPost[];
}
export const ProfileImageList = ({ items }: ProfileImageListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 w-full">
      {items
        .filter((item) => item.images[0]?.previewUrl) // Filter out invalid items
        .map((item) => (
          <Image
            key={item.id}
            src={item.images[0].previewUrl}
            alt={item.description || "Post image"}
            width={300}
            height={400}
            className="w-full h-auto aspect-square object-cover"
            unoptimized // Required for base64 data URLs
          />
        ))}
    </div>
  );
};
