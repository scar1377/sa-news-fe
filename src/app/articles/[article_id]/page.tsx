import CommentSection from "@/components/CommentSection";
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
    <>
      <h2>{article.title}</h2>
      <p>topic: {article.topic}</p>
      <p>author: {article.author}</p>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
      <p>created at {article.created_at}</p>
      <p>votes: {article.votes}</p>

      <CommentSection
        article_id={article_id}
        initialCommentCount={article.comment_count}
      />
    </>
  );
};

export default SingleArticle;
