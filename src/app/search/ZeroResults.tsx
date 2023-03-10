import Link from "next/link";

export default function ZeroResults() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results found</h1>
      <p className="text-lg text-center">
        Try searching for something else or go back to the homepage{" "}
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </p>
    </div>
  );
}
