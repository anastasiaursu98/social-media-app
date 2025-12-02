import { ImageUploadButton } from "./image-preview/ImageUploadButton";

import { ImagePreviwCarusel } from "./image-preview/ImagePreviwCarusel";
import { AddDescription } from "./AddDescription";
import { Image } from "../../types/profile.type";
interface CreatPostContentProps {
  step: number;
  imagesPost: Image[];
}
export const CreatPostContent = ({
  step,
  imagesPost,
}: CreatPostContentProps) => {
  return (
    <div className="flex-1 overflow-hidden flex p-1">
      {step === 1 && (
        <div className="w-full flex justify-center items-center">
          <ImageUploadButton step={step} />
        </div>
      )}
      {step === 2 && (
        <div className="flex w-full h-full gap-0">
          {/* Image Carousel - Left Side */}
          <div className="flex-1  flex items-center justify-center overflow-hidden">
            <ImagePreviwCarusel images={imagesPost} />
          </div>
          {/* Description Panel - Right Side */}
          <div className="w-[400px] bg-white border-l overflow-y-auto">
            <AddDescription />
          </div>
        </div>
      )}
    </div>
  );
};
