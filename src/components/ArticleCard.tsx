import { Article } from "@/types/api";

type ArticleCardProps = { article: Article };
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <li className="rounded-lg border border-orange-100 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-orange-900">{article.title}</h3>
      <span className="rounded-lg border-2 border-orange-200 bg-orange-50 px-2 py-1 text-sm text-orange-500">
        {article.topic.toUpperCase()}
      </span>
      <p>author: {article.author}</p>
      <p>created at:{article.created_at}</p>
      <p>votes:{article.votes}</p>
      <p>comments: {article.comment_count}</p>
    </li>
  );
};

export default ArticleCard;
