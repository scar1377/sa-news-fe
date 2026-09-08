import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/utils/api";
import Link from "next/link";

export default async function Home() {
  const result = await getArticles({
    sort_by: "created_at",
    order: "desc",
    topic: undefined,
  });
  if (!result.ok) {
    throw Error("Oops, something went wrong... Try again later");
  }
  const { articles } = result;
  const chosenArticles = articles.slice(0, 3);
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
            className="rounded-md bg-orange-600 px-4 py-2 text-white transition duration-200 hover:bg-orange-700 transition duration-200 active:translate-y-0.5 active:translate-x-0.5"
          >
            Browse articles
          </Link>
          <Link
            href="/topics"
            className="rounded-md border-2 border-orange-200 bg-white px-4 py-2 text-orange-500 transition duration-200 hover:border-orange-300 hover:bg-orange-50 transition duration-200 active:translate-y-0.5 active:translate-x-0.5"
          >
            Explore topics
          </Link>
        </div>
      </div>
      <section className="mt-10">
        <h3 className="mb-4 text-xl font-bold text-orange-400 ">
          Latest articles
        </h3>
        <ul className="flex flex-col gap-4">
          {chosenArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
        <Link
          href="/articles"
          className="mt-4 inline-block text-sm font-medium text-orange-500 hover:text-orange-700"
        >
          View all articles →
        </Link>
      </section>
    </div>
  );
}
