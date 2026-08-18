import type { Article, Comment, SingleArticle, Topic } from "@/types/api";

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

type GetArticleResult =
  | { ok: true; article: SingleArticle }
  | { ok: false; status: number; msg: string };

export const getArticleById = async (
  article_id: string,
): Promise<GetArticleResult> => {
  const res = await fetch(`${API_URL}/articles/${article_id}`);

  if (!res.ok) {
    const err = await res.json();
    return {
      ok: false,
      status: res.status,
      msg: err.msg,
    };
  }
  const data: { article: SingleArticle } = await res.json();

  return { ok: true, article: data.article };
};

type GetCommentsByArticleIdResult =
  | { ok: true; comments: Comment[] }
  | { ok: false; status: number; msg: string };

export const getCommentsByArticleId = async (
  article_id: string,
): Promise<GetCommentsByArticleIdResult> => {
  const res = await fetch(`${API_URL}/articles/${article_id}/comments`);
  if (!res.ok) {
    const err = await res.json();
    return {
      ok: false,
      status: res.status,
      msg: err.msg,
    };
  }
  const data: { comments: Comment[] } = await res.json();

  return { ok: true, comments: data.comments };
};
