import Image from "next/image";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchOptions from "./SearchOptions";
import SearchBox from "./SearchBox";

export default function SearchHeader() {
  return (
    <header className="sticky z-50 top-0 bg-white">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row w-full px-3 sm:px-6 py-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            alt="google"
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            priority={true}
          />
        </Link>
        <div className="flex-1 w-full">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />{" "}
          <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
            Sign in
          </button>
        </div>
      </div>
      <SearchOptions />
    </header>
  );
}
