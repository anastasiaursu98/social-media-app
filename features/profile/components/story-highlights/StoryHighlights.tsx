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
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect, useMemo } from "react";

const MAX_HIGHLIGHTS_MOBILE = 4;
const MAX_HIGHLIGHTS_TABLET = 6;
const MAX_HIGHLIGHTS_DESKTOP = 8;

export const StoryHighlights = () => {
  const [showControls, setShowControls] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const highlights = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index.toString(),
        image: DEFAULT_AVATAR_IMAGE,
        alt: `Highlight ${index}`,
      })),
    []
  );

  useEffect(() => {
    if (isMobile && highlights.length > MAX_HIGHLIGHTS_MOBILE) {
      setShowControls(true);
    } else if (!isMobile && highlights.length > MAX_HIGHLIGHTS_DESKTOP) {
      setShowControls(true);
    } else {
      setShowControls(false);
    }
  }, [isMobile, highlights.length]);

  return (
    <Card>
      <h2 className="text-lg font-bold mb-4">Story Highlights</h2>
      <div className="px-6">
        <Carousel>
          <CarouselContent>
            {highlights.map((highlight) => (
              <CarouselItem
                key={highlight.id}
                className={
                  `basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8"`
                }
              >
                <AvatarImage
                  src={highlight.image}
                  alt={highlight.alt}
                  size={80}
                  hasStory={true}
                  showAvatarImageButton={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {showControls && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </Card>
  );
};
