import ArticleList from "@/components/ArticleList";
import { getArticles } from "@/utils/api";

type ArticlesProps = {
  searchParams: Promise<{
    sort_by?: string;
    order?: "asc" | "desc";
    topic?: string;
  }>;
};
const Articles = async ({ searchParams }: ArticlesProps) => {
  const { sort_by, order, topic } = await searchParams;
  const res = await getArticles(sort_by, order, topic);
  if (!res.ok) {
    throw Error("Oops, something went wrong... Try again later");
  }
  const { articles } = res;

  return <ArticleList articles={articles} />;
};

export default Articles;
