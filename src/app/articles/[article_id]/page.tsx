import CommentSection from "@/components/CommentSection";
import Votes from "@/components/Votes";
import { getArticleById } from "@/utils/api";
import { notFound } from "next/navigation";

const SingleArticle = async ({
  params,
}: PageProps<"/articles/[article_id]">) => {
  const { article_id } = await params;

  const result = await getArticleById(article_id);

  if (!result.ok && result.status === 404) {
    notFound();
  }

  if (!result.ok) {
    throw new Error(result.msg);
  }

  const { article } = result;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-orange-900">{article.title}</h2>
        <span className="self-start rounded-lg border-2 border-orange-200 bg-orange-50 px-2 py-1 text-sm text-orange-500">
          topic: {article.topic.toUpperCase()}
        </span>
        <div className="text-sm text-neutral-500">
          <span>author: {article.author}</span>
          <img src={article.article_img_url} />
          <span>{article.body}</span>
          <span>created at {article.created_at}</span>
        </div>
      </div>
      <Votes article_id={article_id} initialVotes={article.votes} />

      <CommentSection
        article_id={article_id}
        initialCommentCount={article.comment_count}
      />
    </div>
  );
};

export default SingleArticle;
