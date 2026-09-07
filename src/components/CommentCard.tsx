"use client";
import type { Comment } from "@/types/api";
import DeleteButton from "./DeleteButton";
import useUser from "@/contexts/useUser";

type CommentCardProps = {
  comment: Comment;
  onDeleteSuccess: (id: number) => void;
};
const CommentCard = ({ comment, onDeleteSuccess }: CommentCardProps) => {
  const { user } = useUser();
  return (
    <li className="rounded-lg border border-orange-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-base leading-6 text-neutral-700">{comment.body}</p>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
            <span>👤 {comment.author}</span>
            <span>·</span>
            <span>
              {new Date(comment.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <span className="shrink-0 text-sm text-neutral-500">
          👍🏻 {comment.votes} {comment.votes === 1 ? "vote" : "votes"}
        </span>
      </div>

      {user?.username === comment.author && (
        <div className="mt-3">
          <DeleteButton
            comment_id={comment.comment_id}
            onDeleteSuccess={onDeleteSuccess}
          />
        </div>
      )}
    </li>
  );
};

export default CommentCard;
