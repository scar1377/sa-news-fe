import { Article } from "@/types/api";

type ArticleCardProps = { article: Article };
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <li>
      <h2>{article.title}</h2>
      <p>topic :{article.topic}</p>
      <p>author: {article.author}</p>
      <p>created at:{article.created_at}</p>
      <p>votes:{article.votes}</p>
      <p>comments: {article.comment_count}</p>
    </li>
  );
};

export default ArticleCard;
