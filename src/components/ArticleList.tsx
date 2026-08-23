import { Article } from "@/types/api";
import Search from "./Search";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};
const ArticleList = async ({ articles }: ArticleListProps) => {
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

export default ArticleList;
