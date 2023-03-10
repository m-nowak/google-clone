import { motion as m } from "framer-motion";
import Link from "next/link";

export default function ImageResult({ result }: any) {
  return (
    <m.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="group">
        <Link href={result.image.contextLink}>
          <img
            src={result.link}
            alt={result.title}
            className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
          />
        </Link>
        <div className="text-center max-w-sm">
          <Link href={result.image.contextLink}>
            <h2 className="group-hover:underline truncate text-xl">
              {result.title}
            </h2>
          </Link>
          <Link href={result.image.contextLink}>
            <p className="group-hover:underline text-gray-600">
              {result.displayLink}
            </p>
          </Link>
        </div>
      </div>
    </m.div>
  );
}
