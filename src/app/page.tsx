import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-orange-900">
          Welcome to SA News
        </h2>

        <p className="text-base leading-7 text-neutral-600">
          A community news site where you can browse articles, explore topics,
          vote and join the discussion.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/articles"
            className="rounded-md bg-orange-600 px-4 py-2 text-white transition duration-200 hover:bg-orange-700"
          >
            Browse articles
          </Link>
          <Link
            href="/topics"
            className="rounded-md border-2 border-orange-200 bg-white px-4 py-2 text-orange-500 transition duration-200 hover:border-orange-300 hover:bg-orange-50"
          >
            Explore topics
          </Link>
        </div>
      </div>
    </div>
  );
}
