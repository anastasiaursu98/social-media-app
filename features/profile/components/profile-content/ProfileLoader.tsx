import { LoaderCircleIcon } from "lucide-react";
import { RefObject } from "react";

interface ProfileLoaderProps {
  loaderRef: RefObject<HTMLDivElement>;
  isLoading: boolean;
}
export const ProfileLoader = ({ loaderRef, isLoading }: ProfileLoaderProps) => {
  return (
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
  );
};
