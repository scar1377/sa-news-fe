import ArticleList from "@/components/ArticleList";
import { getArticles } from "@/utils/api";

const Articles = async ({ searchParams }: PageProps<"/articles">) => {
  const { sort_by, order } = await searchParams;

  const sortBy = typeof sort_by === "string" ? sort_by : undefined;
  const orderVal = order === "asc" || order === "desc" ? order : undefined;
  const result = await getArticles({ sort_by: sortBy, order: orderVal });
  if (!result.ok) {
    throw Error("Oops, something went wrong... Try again later");
  }
  const { articles } = result;

  return <ArticleList articles={articles} />;
};

export default Articles;
