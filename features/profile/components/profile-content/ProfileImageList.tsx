"use client";
import { useState } from "react";
import { AllImagesPost, PostImage } from "../../types/profile.type";
import Image from "next/image";

import { ViewSinglePost } from "./view-post/ViewSinglePost";
interface ProfileImageListProps {
  items: AllImagesPost[];
}
export const ProfileImageList = ({ items }: ProfileImageListProps) => {
  const [selectPost, setSelectPost] = useState<PostImage>();
  const [viewSinglePost, setViewSinglePost] = useState<boolean>(false);
  // Deduplicate items by ID and filter out invalid items
  const uniqueItems = items
    .filter((item) => item.images[0]?.previewUrl)
    .filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );

  const handleSelectPost = (post: PostImage) => {
    setSelectPost(post);
    setViewSinglePost(true);
  };
  return (
    <>
      {viewSinglePost && (
        <ViewSinglePost
          post={selectPost}
          isOpen={viewSinglePost}
          setIsOpen={setViewSinglePost}
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 w-full">
        {uniqueItems.map((item) => (
          <Image
            onClick={() => handleSelectPost(item)}
            key={item.id}
            src={item.images[0].previewUrl}
            alt={item.description || "Post image"}
            width={300}
            height={400}
            className="w-full h-full  object-cover"
          />
        ))}
      </div>
    </>
  );
};
