import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ImagePreviewList } from "./ImagePreviewList";
import { Image as ImageType } from "../../../types/profile.type";

interface ImagePreviewProps {
  images: ImageType[];
  addMoreImages: (images: File[]) => Promise<void>;
  removeImagePost: (image: ImageType) => void;
  step: number;
}

export const ImagePreview = ({
  images,
  addMoreImages,
  removeImagePost,
  step,
}: ImagePreviewProps) => {
  const [showBottomAdd, setShowBottomAdd] = useState(false);
  console.log(images.length);
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Show only the first image as Instagram (before swipe/carousel) */}
      {images.length > 0 && (
        <Image
          src={images[0].previewUrl}
          alt={images[0].file?.name || "Post image"}
          className="w-full h-full object-contain rounded-md"
          width={images[0].width}
          height={images[0].height}
          unoptimized
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
      {showBottomAdd && step === 1 && (
        <>
          <div className="absolute bottom-6 right-14">
            {images.length === 3 && (
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
