import { useState, useEffect, useRef, useCallback } from "react";

interface UseInfiniteScrollProps {
  loadMore: () => void;
  hasMore?: boolean;
}

export const useInfiniteScroll = ({ loadMore, hasMore = true }: UseInfiniteScrollProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize the callback to prevent infinite loops
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      // Only load more if:
      // 1. Element is intersecting
      // 2. Not currently loading
      // 3. There are more items to load
      if (entry.isIntersecting && !isLoading && hasMore) {
        setIsLoading(true);

        // Delay to show loading indicator
        setTimeout(() => {
          loadMore();
          setIsLoading(false);
        }, 400);
      }
    },
    [isLoading, hasMore, loadMore]
  );

  useEffect(() => {
    const currentLoader = loaderRef.current;

    if (!currentLoader || !hasMore) {
      return;
    }

    // Create observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observerRef.current.observe(currentLoader);

    // Cleanup
    return () => {
      if (observerRef.current && currentLoader) {
        observerRef.current.unobserve(currentLoader);
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, hasMore]);

  return {
    loaderRef,
    isLoading,
  };
};
