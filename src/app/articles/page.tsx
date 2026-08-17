import { Article } from "@/types/api";

const Articles = async () => {
  const res = await fetch("https://sa-news-be.onrender.com/api/articles");

  if (!res.ok) {
    const err = await res.json();
    throw err.msg
      ? new Error(err.msg)
      : new Error("Oops! Something has gone wrong...");
  }
  const data: { articles: Article[] } = await res.json();
  const { articles } = data;
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map((article: Article) => {
          return (
            <li key={article.article_id}>
              <h3>Article card</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
