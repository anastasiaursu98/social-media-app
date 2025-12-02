import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { Image as ImageType } from "../../../types/profile.type";

interface ImagePreviewListProps {
  images: ImageType[];
  addMoreImages: (images: File[]) => void;
  removeImagePost: (image: ImageType) => void;
  onError?: (message: string) => void;
}
export const ImagePreviewList = ({
  images,
  addMoreImages,
  removeImagePost,
}: ImagePreviewListProps) => {
  // Dimensions for each item (image or "+" button)
  const imageWidth = 100;
  const gap = 8;

  const itemsCount = images.length + 1;

  const totalWidth = itemsCount * imageWidth + (itemsCount - 1) * gap;

  return (
    <div
      className="absolute bottom-12 right-2 bg-black/40 backdrop-blur-md flex items-center justify-end h-40 gap-2 px-4 rounded-md"
      style={{ width: totalWidth }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className="relative flex items-center justify-start"
        >
          <Image
            src={image.previewUrl}
            alt={image.file.name}
            className="object-contain rounded-md"
            width={imageWidth}
            height={imageWidth}
          />
          <div className="absolute top-1 right-1">
            <Button
              onClick={() => {
                if (removeImagePost && typeof removeImagePost === "function") {
                  removeImagePost(image);
                }
              }}
              className="cursor-pointer bg-black/70 hover:bg-black/70 p-2 w-6 h-6 rounded-full"
              size="icon"
            >
              <XIcon className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-start">
        <Button
          disabled={images.length > 3}
          className="cursor-pointer bg-black/60 hover:bg-black/70 p-4 w-10 h-10 rounded-full border border-gray-100 hover:border-gray-200"
        >
          <Label htmlFor="image-upload">
            {images.length < 3 && (
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) =>
                  addMoreImages(Array.from(e.target.files || ([] as File[])))
                }
              />
            )}
            <PlusIcon className="w-10 h-10 text-gray-100" />
          </Label>
        </Button>
      </div>
    </div>
  );
};
