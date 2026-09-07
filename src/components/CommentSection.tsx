"use client";

import type { Comment } from "@/types/api";
import { getCommentsByArticleId } from "@/utils/api";
import { useState } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

type CommentSectionProps = { article_id: string; initialCommentCount: number };
const CommentSection = ({
  article_id,
  initialCommentCount,
}: CommentSectionProps) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentCount, setCommentCount] = useState(initialCommentCount);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClickShow = async () => {
    setShowComments(true);
    setIsLoading(true);
    setError("");
    const res = await getCommentsByArticleId(article_id);
    if (!res.ok) {
      setError("Sorry, we couldn't load the comments.");
      setIsLoading(false);
      return;
    }
    setComments(res.comments);
    setIsLoading(false);
  };
  const handleClickHide = () => {
    setShowComments(false);
  };
  const onPostSuccess = (comment: Comment) => {
    setComments((current) => [comment, ...current]);
    setCommentCount((current) => current + 1);
  };

  const onDeleteSuccess = (id: number) => {
    setCommentCount((pre) => pre - 1);
    setComments((currComments) => {
      return currComments.filter((comment) => comment.comment_id !== id);
    });
  };
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-orange-900">
        Comments ({commentCount})
      </h3>
      <CommentAdder article_id={article_id} onPostSuccess={onPostSuccess} />
      {isLoading && (
        <p className="text-sm text-neutral-500">Loading comments...</p>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      {showComments ? (
        <>
          <button
            onClick={handleClickHide}
            className="self-start rounded-md border-2 border-orange-200 bg-white px-3 py-1.5 text-sm text-orange-500 transition duration-200 hover:border-orange-300 hover:bg-orange-50"
          >
            Hide Comments
          </button>
          {comments.length === 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-neutral-500">No comments yet</p>
              <button className="self-start text-sm font-medium text-orange-500 hover:text-orange-700">
                add comment
              </button>
            </div>
          )}
          <ul className="flex flex-col gap-3">
            {comments.map((comment) => (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                onDeleteSuccess={onDeleteSuccess}
              />
            ))}
          </ul>
        </>
      ) : (
        <button
          onClick={handleClickShow}
          className="self-start rounded-md border-2 border-orange-200 bg-white px-3 py-1.5 text-sm text-orange-500 transition duration-200 hover:border-orange-300 hover:bg-orange-50"
        >
          Show Comments
        </button>
      )}
    </section>
  );
};

export default CommentSection;
