import ArticleList from "@/components/ArticleList";
import { getArticles } from "@/utils/api";
import { notFound } from "next/navigation";

const ArticlesByTopic = async ({
  params,
  searchParams,
}: PageProps<"/topics/[topic]/articles">) => {
  const { topic } = await params;
  const { sort_by, order } = await searchParams;

  const sortBy = typeof sort_by === "string" ? sort_by : undefined;
  const orderVal = order === "asc" || order === "desc" ? order : undefined;
  const result = await getArticles({ sort_by: sortBy, order: orderVal, topic });

  if (!result.ok && result.status === 404) {
    notFound();
  }

  if (!result.ok) {
    throw new Error(result.msg);
  }

  const { articles } = result;
  return (
    <ArticleList
      articles={articles}
      title={`${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles`}
    />
  );
};

export default ArticlesByTopic;
