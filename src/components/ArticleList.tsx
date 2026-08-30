import type { Article } from "@/types/api";
import Search from "./Search";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};
const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <h2>Articles</h2>
      <Search />
      <ul className="flex flex-col gap-4">
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
    </div>
  );
};

export default ArticleList;
