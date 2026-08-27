import { Article } from "@/types/api";

type ArticleCardProps = { article: Article };
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <li className="rounded-lg border border-orange-100 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-orange-900">{article.title}</h3>
      <span className="rounded-lg border-2 border-orange-200 bg-orange-50 px-2 py-1 text-sm text-orange-500">
        {article.topic.toUpperCase()}
      </span>
      <div className="text-sm text-neutral-500">
        <span>👤 {article.author}</span>
        <span> · </span>
        <span>
          created at:{" "}
          {new Date(article.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <span>votes:{article.votes}</span>
      <span>comments: {article.comment_count}</span>
    </li>
  );
};

export default ArticleCard;
