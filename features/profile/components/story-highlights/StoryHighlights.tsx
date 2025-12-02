"use client";
import { Card } from "@/components/shared/Card";
import { AvatarImage } from "@/components/shared/image/AvatarImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useMemo } from "react";

const MAX_VISIBLE_HIGHLIGHTS = {
  mobile: 3,
  tablet: 5,
  desktop: 6,
} as const;

export const StoryHighlights = () => {
  const deviceType = useBreakpoint();

  const highlights = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index.toString(),
        image: DEFAULT_AVATAR_IMAGE,
        alt: `Highlight ${index}`,
      })),
    []
  );

  const showControls = useMemo(() => {
    const maxVisible = MAX_VISIBLE_HIGHLIGHTS[deviceType];
    return highlights.length > maxVisible;
  }, [deviceType, highlights.length]);

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4 px-2 sm:px-0">
        Story Highlights
      </h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            {highlights.map((highlight) => (
              <CarouselItem
                key={highlight.id}
                className="pl-2 sm:pl-3 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex flex-col items-center gap-2">
                  <AvatarImage
                    src={highlight.image}
                    alt={highlight.alt}
                    size={
                      deviceType === "mobile"
                        ? 64
                        : deviceType === "tablet"
                        ? 72
                        : 80
                    }
                    hasStory={true}
                    showAvatarImageButton={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {showControls && (
            <>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-6" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-6" />
            </>
          )}
        </Carousel>
      </div>
    </Card>
  );
};
