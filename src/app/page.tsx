import Image from "next/image";
import { Inter } from "next/font/google";
import HomeHeader from "@/app/HomeHeader";
import HomeSearch from "@/app/HomeSearch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-40">
        <div className="px-20">
          <Image
            alt="google"
            width="300"
            height="100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            priority={true}
            className="flex w-auto"
          />
        </div>
        <HomeSearch />
      </div>
    </>
  );
}
