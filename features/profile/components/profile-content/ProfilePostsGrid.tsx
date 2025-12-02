"use client";
import Image from "next/image";
import { Card } from "@/components/shared/Card";
import { AllImagesPost } from "../../types/profile.type";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { ProfileStore } from "../../store/profile.store";

export const ProfilePostsGrid = () => {
  const [items, setItems] = useState<AllImagesPost[]>([]);

  const { allImagesPost } = ProfileStore();

  const initialLoad = 8; // Initial number of posts to load

  useEffect(() => {
    // Only load initial items if items array is empty
    if (items.length === 0 && allImagesPost) {
      const initialItems = allImagesPost.slice(0, initialLoad);
      setItems(initialItems);
    }
  }, [allImagesPost, items.length, initialLoad]);

  const loadMore = useCallback(() => {
    // Don't load more if we've already loaded all posts
    if (items.length >= allImagesPost.length) {
      return;
    }

    const nextItems = allImagesPost?.slice(
      items.length,
      items.length + initialLoad
    );
    setItems((prevItems) => [...prevItems, ...(nextItems || [])]);
  }, [items.length, allImagesPost, initialLoad]);

  const { loaderRef, isLoading } = useInfiniteScroll({
    loadMore,
    hasMore: items.length < allImagesPost.length,
  });

  return (
    <Card>
      <div className="w-full flex flex-col items-center justify-center">
        {items.length === 0 && (
          <div className="w-full flex items-center justify-center h-full col-span-4">
            <span className="text-sm md:text-base lg:text-lg text-gray-500">
              No posts found
            </span>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 w-full">
          {items.map((item) => (
            <Image
              key={item.id}
              src={item.images[0].previewUrl}
              alt={item.images[0].file.name}
              width={300}
              height={400}
              className="w-full h-auto aspect-square object-cover"
            />
          ))}
        </div>
        {items.length < allImagesPost.length && (
          <div
            ref={loaderRef}
            className="w-full flex items-center gap-2 justify-center mt-4 py-4"
          >
            {isLoading && (
              <>
                <LoaderCircleIcon className="w-4 h-4 animate-spin" />
                <span className="text-sm md:text-base lg:text-lg text-gray-500">
                  Loading more posts...
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
