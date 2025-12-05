import { PostImage } from "../../../types/profile.type";
import { Modal } from "@/components/shared/modals";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ViewSinglePostComents } from "./ViewSinglePostComents";

interface ViewSinglePostProps {
  post: PostImage | undefined;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const ViewSinglePost = ({
  post,
  isOpen,
  setIsOpen,
}: ViewSinglePostProps) => {
  console.log("post", post);
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      contentClassName="max-w-4xl max-h-[80vh] flex flex-row gap-0 p-0 overflow-hidden"
      closeOnOverlayClick={true}
    >
      <div className="flex-1 border-r border-border h-full">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full">
            {Array.isArray(post?.images) &&
              post?.images.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="flex items-center justify-center h-full"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={image.previewUrl}
                      alt={image.file?.name || "Post image"}
                      width={image.width}
                      height={image.height}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          {post?.images?.length && post?.images?.length > 1 && (
            <>
              <CarouselPrevious className="left-4 bg-gray-800/70 hover:bg-gray-700/90 text-white border-none" />
              <CarouselNext className="right-4 bg-gray-800/70 hover:bg-gray-700/90 text-white border-none" />
            </>
          )}
        </Carousel>
      </div>
      <ViewSinglePostComents />
    </Modal>
  );
};
