import { getTopics } from "@/utils/api";
import Link from "next/link";

const Topics = async () => {
  const topics = await getTopics();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <h2 className="text-2xl font-bold text-orange-400">Topics</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link
                href={`/topics/${topic.slug}/articles`}
                className="block overflow-hidden rounded-lg border border-orange-100 bg-white shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <img
                  src={
                    topic.img_url
                      ? topic.img_url
                      : "https://placehold.co/700x500"
                  }
                  alt={`${topic.slug}`}
                  className="h-64 w-full object-cover"
                />
                <div className="flex flex-col gap-1 p-4">
                  <h3 className="text-xl font-bold text-orange-900">
                    {topic.slug.toUpperCase()}
                  </h3>
                  <p className="text-base text-neutral-500">
                    {topic.description}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
