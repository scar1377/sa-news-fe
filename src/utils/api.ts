import type { Article, SingleArticle, Topic } from "@/types/api";

const API_URL = "https://sa-news-be.onrender.com/api";

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${API_URL}/articles`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.msg);
  }
  const data: { articles: Article[] } = await res.json();
  return data.articles;
};

export const getTopics = async (): Promise<Topic[]> => {
  const res = await fetch(`${API_URL}/topics`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.msg);
  }
  const data: { topics: Topic[] } = await res.json();
  return data.topics;
};

export const getArticleById = async (
  article_id: string,
): Promise<SingleArticle> => {
  const res = await fetch(`${API_URL}/articles/${article_id}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.msg);
  }
  const data: { article: SingleArticle } = await res.json();

  return data.article;
};
