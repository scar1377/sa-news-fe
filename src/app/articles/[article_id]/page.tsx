import { getArticleById } from "@/utils/api";

const SingleArticle = async ({
  params,
}: PageProps<"/articles/[article_id]">) => {
  const { article_id } = await params;

  const article = await getArticleById(article_id);
  return (
    <>
      <h2>{article.title}</h2>
      <p>topic: {article.topic}</p>
      <p>author: {article.author}</p>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
      <p>created at {article.created_at}</p>
      <p>votes: {article.votes}</p>
      <p>comments: {article.comment_count}</p>
    </>
  );
};

export default SingleArticle;
