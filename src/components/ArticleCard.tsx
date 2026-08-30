import { Article } from "@/types/api";
import Link from "next/link";

type ArticleCardProps = { article: Article };
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <li className="block rounded-lg border border-orange-100 bg-white p-5 shadow-sm">
      <Link href={`/articles/${article.article_id}`}>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-orange-900">{article.title}</h3>
          <span className="self-start rounded-lg border-2 border-orange-200 bg-orange-50 px-2 py-1 text-sm text-orange-500">
            {article.topic.toUpperCase()}
          </span>
          <div className="text-sm text-neutral-500">
            <span>👤 {article.author}</span>
            <span> · </span>
            <span>
              {new Date(article.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span>👍🏻 {article.votes} votes</span>
            <span>💬 {article.comment_count} comments</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
