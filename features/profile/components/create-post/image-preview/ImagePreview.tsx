import { Button } from "@/components/ui/button";
import { CopyIcon, PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ImagePreviewList } from "./ImagePreviewList";
import { PostImage } from "../../../types/profile.type";

interface ImagePreviewProps {
  images: PostImage[];
  addMoreImages: (images: File[]) => void;
  removeImagePost: (image: PostImage) => void;
}

export const ImagePreview = ({
  images,
  addMoreImages,
  removeImagePost,
}: ImagePreviewProps) => {
  const [showBottomAdd, setShowBottomAdd] = useState(false);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Show only the first image as Instagram (before swipe/carousel) */}
      {images.length > 0 && (
        <Image
          src={images[0].previewUrl}
          alt={images[0].file.name}
          className="w-full h-full object-cover rounded-md"
          width={600}
          height={600}
        />
      )}

      {/* Copy PLUS button */}
      <div className="absolute bottom-2 right-2">
        <Button
          className="cursor-pointer bg-black/60 hover:bg-black/70 p-2 rounded-full"
          size="icon"
          onClick={() => setShowBottomAdd(true)}
        >
          <CopyIcon className="w-4 h-4 text-gray-100" />
        </Button>
      </div>

      {/* Bottom Container */}
      {showBottomAdd && (
        <>
          <div className="absolute bottom-6 left-8">
            {images.length >= 3 && (
              <span className="text-sm text-red-500 mb-2">
                You can only add up to 3 images
              </span>
            )}
          </div>
          <ImagePreviewList
            images={images}
            addMoreImages={addMoreImages}
            removeImagePost={removeImagePost}
          />
        </>
      )}
    </div>
  );
};
