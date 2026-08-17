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
