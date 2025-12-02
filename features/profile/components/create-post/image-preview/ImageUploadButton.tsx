"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiImagesThin } from "react-icons/pi";
import { ImagePreview } from "./ImagePreview";
import { ProfileStore } from "../../../store/profile.store";

interface ImageUploadButtonProps {
  step: number;
}
export const ImageUploadButton = ({ step }: ImageUploadButtonProps) => {
  const imagesPost = ProfileStore((state) => state.imagesPost);
  const addImagePost = ProfileStore((state) => state.addImagePost);
  const removeImagePost = ProfileStore((state) => state.removeImagePost);

  /**
   * Handle image upload
   * @param e - React.ChangeEvent<HTMLInputElement>
   */ const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) addImagePost(Array.from(files));
  };
  return (
    <div className={`${imagesPost.length > 0 ? "w-full h-full " : ""}`}>
      {imagesPost.length > 0 && (
        <ImagePreview
          images={imagesPost}
          addMoreImages={(images: File[]) => addImagePost(images)}
          removeImagePost={removeImagePost}
          step={step}
        />
      )}
      {imagesPost.length === 0 && (
        <>
          <div className="flex items-center justify-center mb-4">
            <PiImagesThin
              className="w-24 h-24 text-gray-600"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
            />
          </div>
          <div className="flex items-center justify-center ">
            <Button
              variant="default"
              className="cursor-pointer px-14"
              type="button"
            >
              <Label htmlFor="image-upload" className="cursor-pointer">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  multiple
                  onChange={handleImageUpload}
                />
                Select from device
              </Label>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
