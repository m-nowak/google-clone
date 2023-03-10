"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion as m } from "framer-motion";
import AllLoader from "./AllLoader";
import ImageLoader from "./ImageLoader";
import useSearchResults from "@/hooks/useSearchResults";
import AllResult from "./AllResult";
import ImageResult from "./ImageResult";
import ZeroResults from "./ZeroResults";
import LoadMoreButton from "./LoadMoreButton";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams?.get("q");
  const searchType = searchParams?.get("searchType");

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useSearchResults(q, searchType);

  return (
    <>
      {status === "loading" ? (
        searchType === "image" ? (
          <ImageLoader />
        ) : (
          <AllLoader />
        )
      ) : status === "error" ? (
        <div className="flex h-28 justify-center items-center">
          Error: {error?.message}
        </div>
      ) : (
        <>
          {/* Search info ################################################################# */}
          <p className="text-gray-600 text-sm mb-5 mt-3 pl-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            About {data?.pages[0].total} results ({data?.pages[0].time} seconds)
          </p>

          {/* Search results ############################################################## */}
          {data?.pages?.map((group, i) => (
            <div
              key={i}
              className={`${
                searchType === "image"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4"
                  : "w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52"
              }`}
            >
              {group?.results?.map((result: any, index: number) =>
                searchType === "image" ? (
                  <ImageResult key={result.link} result={result} />
                ) : (
                  <AllResult key={result.link} result={result} />
                )
              )}
            </div>
          ))}
          {/* Load more button / 0 results #################################################*/}
          <div
            className={`${
              searchType === "image"
                ? "flex justify-center"
                : "px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52"
            } w-full pb-28 sm:pb-24`}
          >
            {status === "success" ? (
              data?.pages[0].total === undefined || data?.pages[0].total < 1 ? (
                <ZeroResults />
              ) : (
                <LoadMoreButton
                  isFetchingNextPage={isFetchingNextPage}
                  hasNextPage={hasNextPage}
                  fetchNextPage={fetchNextPage}
                />
              )
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
