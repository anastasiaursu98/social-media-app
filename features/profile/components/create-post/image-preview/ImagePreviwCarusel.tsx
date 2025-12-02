import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Image as ImageType } from "../../../types/profile.type";

interface ImagePreviwCaruselProps {
  images: ImageType[];
}
export const ImagePreviwCarusel = ({ images }: ImagePreviwCaruselProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="flex items-center justify-center h-full"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={image.previewUrl}
                  alt={image.file.name}
                  width={image.width}
                  height={image.height}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-gray-800/70 hover:bg-gray-700/90 text-white border-none" />
            <CarouselNext className="right-4 bg-gray-800/70 hover:bg-gray-700/90 text-white border-none" />
          </>
        )}
      </Carousel>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <div key={index} className="w-1.5 h-1.5 rounded-full bg-white/60" />
          ))}
        </div>
      )}
    </div>
  );
};
