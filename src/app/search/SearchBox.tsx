"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useRef, use, LegacyRef } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchType = searchParams?.get("searchType");
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search/?q=${query}&searchType=${searchType}`);
  };

  return (
    <>
      <form
        className="flex border border-gray-200 rounded-full shadow-lg px-6 py-2 sm:ml-10 sm:mr-5 flex-grow max-w-3xl items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Ask anything"
          autoComplete="false"
          ref={inputRef}
        />
        <RxCross2
          className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
          onClick={() => setQuery("")}
        />
        <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
        <AiOutlineSearch
          className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
