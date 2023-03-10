import { motion as m } from "framer-motion";
import Link from "next/link";

export default function AllResult({ result }: any) {
  return (
    <m.div
      className="mb-8 max-w-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="group flex flex-col">
        <Link className="text-sm truncate" href={result?.link}>
          {result?.formattedUrl}
        </Link>
        <Link
          className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
          href={result?.link}
        >
          {result?.title}
        </Link>
      </div>
      <p className="text-gray-600 line-clamp-2">{result?.snippet}</p>
    </m.div>
  );
}
