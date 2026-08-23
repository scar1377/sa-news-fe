import ArticleList from "@/components/ArticleList";
import { getArticles } from "@/utils/api";
import { notFound } from "next/navigation";

const ArticlesByTopic = async ({
  params,
}: PageProps<"/topics/[topic]/articles">) => {
  const { topic } = await params;

  const result = await getArticles(undefined, undefined, topic);

  if (!result.ok && result.status === 404) {
    notFound();
  }

  if (!result.ok) {
    throw new Error(result.msg);
  }

  const { articles } = result;
  return <ArticleList articles={articles} />;
};

export default ArticlesByTopic;
