import Articles from "@/app/articles/page";
import ArticleCard from "@/components/ArticleCard";
import Search from "@/components/Search";
import { getArticles } from "@/utils/api";
import Link from "next/link";
import { notFound } from "next/navigation";

const ArticlesByTopic = async ({
  params,
}: PageProps<"/topics/[topic]/articles">) => {
  const { topic } = await params;

  const result = await getArticles(undefined, undefined, topic);

  if (!result.ok && result.status === 404) {
    notFound();
  }

  if (!result.ok) {
    throw new Error(result.msg);
  }

  const { articles } = result;
  return (
    <>
      <h2>Articles</h2>
      <Search />
      <ul>
        {articles.map((article) => {
          return (
            <Link
              key={article.article_id}
              href={`/articles/${article.article_id}`}
            >
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default ArticlesByTopic;
