"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Spinner from "../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function HomeSearch() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [isRandomSearchLoading, setIsRandomSearchLoading] =
    useState<boolean>(false);
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);
  function handleSubmit(e: React.MouseEvent | React.FormEvent) {
    e.preventDefault();
    query.length > 0 ? setIsSearchLoading(true) : null;
    if (!query.trim()) return;
    router.push(`/search?q=${query}&searchType=all`);
  }
  async function randomSearch() {
    setIsRandomSearchLoading(true);
    const word = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    console.log(word);
    router.push(`/search?q=${word}&searchType=all`);
    setIsRandomSearchLoading(false);
  }

  function search() {
    if (!query.trim()) return;
    router.push(`/search?q=${query}&searchType=all`);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Ask anything"
        />
        <BsFillMicFill className="text-lg text-blue-500" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-6">
        <button
          onClick={handleSubmit}
          className="btn flex items-center justify-center"
        >
          {isSearchLoading ? <Spinner /> : "Google Search"}
        </button>
        <button
          disabled={isRandomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center"
        >
          {isRandomSearchLoading ? <Spinner /> : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
