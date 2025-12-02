"use client";
import { DEFAULT_AVATAR_IMAGE } from "@/constants/images";
import Image from "next/image";
import { Card } from "@/components/shared/Card";
import { ProfilePost } from "../../types/profile.type";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState, useMemo, useCallback } from "react";

interface ProfilePostsGridProps {
  posts?: ProfilePost[];
}

export const ProfilePostsGrid = ({ posts }: ProfilePostsGridProps) => {
  const [items, setItems] = useState<ProfilePost[]>([]);

  const allPosts = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: `${index}-${Date.now()}-${Math.random()}`,
        image: DEFAULT_AVATAR_IMAGE,
        alt: `Post ${index + 1}`,
      })),
    []
  );

  const initialLoad = 8; // Initial number of posts to load

  useEffect(() => {
    // Only load initial items if items array is empty
    if (items.length === 0) {
      const initialItems = posts || allPosts?.slice(0, initialLoad);
      setItems(initialItems || []);
    }
  }, []); // Empty dependency array - only run once on mount

  const loadMore = useCallback(() => {
    // Don't load more if we've already loaded all posts
    if (items.length >= allPosts.length) {
      return;
    }

    const nextItems = allPosts?.slice(items.length, items.length + initialLoad);
    setItems((prevItems) => [...prevItems, ...(nextItems || [])]);
  }, [items.length, allPosts, initialLoad]);

  const { loaderRef, isLoading } = useInfiniteScroll({
    loadMore,
    hasMore: items.length < allPosts.length,
  });

  return (
    <Card>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 w-full">
          {items.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt={item.alt}
              width={300}
              height={400}
              className="w-full h-auto aspect-square object-cover"
            />
          ))}
        </div>
        {items.length < allPosts.length && (
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
