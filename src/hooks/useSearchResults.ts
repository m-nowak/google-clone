import { useInfiniteQuery } from "@tanstack/react-query";
import { DataProps, IApiError } from "@/ts/interfaces";
import axios from "axios";

const useSearchResults = (q: string | null, searchType: string | null) => {
  const fetchResults = async ({ pageParam = 1 }): Promise<DataProps> => {
    const url =
      searchType === "image"
        ? `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&searchType=image&q=${q}&start=${pageParam}`
        : `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${q}&start=${pageParam}`;
    const { data } = await axios.get(url);
    const next = data?.queries.nextPage || JSON.stringify(new Number(0));
    const results = data?.items || JSON.stringify(undefined);
    const total = data?.searchInformation?.formattedTotalResults;
    const time = data?.searchInformation?.formattedSearchTime;
    return { total, time, results, nextPage: next };
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["results", q, searchType],
    queryFn: fetchResults,
    getNextPageParam: (lastPage, pages) => lastPage?.nextPage[0].startIndex,
    refetchOnWindowFocus: false,
    onError: (err: IApiError) => err,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
export default useSearchResults;
