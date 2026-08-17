export type Article = {
  article_id: number;
  title: string;
  topic: string;
  author: string;
  created_at: string;
  votes: number;
  comment_count: number;
};

export type Topic = {
  slug: string;
  description: string;
  img_url?: string;
};
export type SingleArticle = {
  article_id: number;
  article_img_url: string;
  title: string;
  topic: string;
  author: string;
  body: string;
  created_at: string;
  votes: number;
  comment_count: number;
};
