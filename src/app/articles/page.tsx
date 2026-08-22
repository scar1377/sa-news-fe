import ArticleCard from "@/components/ArticleCard";
import Search from "@/components/Search";
import { getArticles } from "@/utils/api";
import Link from "next/link";

type ArticlesProps = {
  searchParams: Promise<{
    sort_by?: string;
    order?: "asc" | "desc";
    topic?: string;
  }>;
};
const Articles = async ({ searchParams }: ArticlesProps) => {
  const { sort_by, order, topic } = await searchParams;
  const articles = await getArticles(sort_by, order, topic);
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

export default Articles;
