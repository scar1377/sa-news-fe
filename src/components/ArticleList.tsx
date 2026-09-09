import type { Article } from "@/types/api";
import Search from "./Search";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
  title?: string;
};
const ArticleList = ({ articles, title = "Articles" }: ArticleListProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <h2 className="mb-4 text-2xl font-bold text-orange-400 ">{title}</h2>
      <Search />
      <ul className="flex flex-col gap-4">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
