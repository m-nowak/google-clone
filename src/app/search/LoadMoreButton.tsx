import { motion as m } from "framer-motion";

export default function LoadMoreButton({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: any) {
  return (
    <m.div
      className="flex max-w-xl h-28 justify-center items-center"
      key="dial"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      }}
    >
      <button
        aria-label="load-more"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="btn"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : null}
      </button>
    </m.div>
  );
}
