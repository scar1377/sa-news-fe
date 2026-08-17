import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/api";
import { getArticles } from "@/utils/api";

const Articles = async () => {
  const articles = await getArticles();
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map((article: Article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
