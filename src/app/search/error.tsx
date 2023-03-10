"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-xl sm:text-3xl mb-4 text-center">
        Oops, something went wrong
      </h1>
      <button className="text-blue-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
