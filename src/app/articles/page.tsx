import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/api";
import { getArticles } from "@/utils/api";
import Link from "next/link";

const Articles = async () => {
  const articles = await getArticles();
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map((article: Article) => {
          return (
            <Link
              key={article.article_id}
              href={`/articles/${article.article_id}`}
            >
              <ArticleCard article={article} />;
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
