"use client";
import Image from "next/image";
import { Card } from "@/components/shared/Card";
import { AllImagesPost } from "../../types/profile.type";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useEffect, useState, useCallback } from "react";
import { ProfileStore } from "../../store/profile.store";
import { ProfileImageList } from "./ProfileImageList";
import { ProfileLoader } from "./ProfileLoader";
import { RefObject } from "react";

export const ProfileContent = () => {
  const [items, setItems] = useState<AllImagesPost[]>([]);
  const [previousLength, setPreviousLength] = useState(0);

  const { allImagesPost } = ProfileStore();

  const initialLoad = 8; // Initial number of posts to load

  useEffect(() => {
    // Only update items if the length of allImagesPost has changed
    // This prevents duplicate renders when the same data is rehydrated
    if (allImagesPost.length !== previousLength) {
      const initialItems = allImagesPost.slice(0, initialLoad);
      setItems(initialItems);
      setPreviousLength(allImagesPost.length);
    }
  }, [allImagesPost, initialLoad, previousLength]);

  const loadMore = useCallback(() => {
    // Don't load more if we've already loaded all posts
    if (items.length >= allImagesPost.length) {
      return;
    }

    const nextItems = allImagesPost.slice(
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
        <ProfileImageList items={items} />
        {items.length < allImagesPost.length && (
          <ProfileLoader
            loaderRef={loaderRef as unknown as RefObject<HTMLDivElement>}
            isLoading={isLoading}
          />
        )}
      </div>
    </Card>
  );
};
