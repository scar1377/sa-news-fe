import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-orange-900">Topic not found</h2>

        <p className="text-base text-neutral-600">
          The topic you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/topics"
          className="self-start rounded-md bg-orange-600 px-4 py-2 text-white transition duration-200 hover:bg-orange-700 active:translate-x-0.5 active:translate-y-0.5"
        >
          Back to all topics
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
