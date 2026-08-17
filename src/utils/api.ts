import type { Article } from "@/types/api";

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
