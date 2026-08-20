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
    const result = await getCommentsByArticleId(article_id);
    if (!result.ok) {
      setError("Sorry, we couldn't load the comments.");
      setIsLoading(false);
      return;
    }
    setComments(result.comments);
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
    <>
      <p>Comments({commentCount})</p>
      <CommentAdder article_id={article_id} onPostSuccess={onPostSuccess} />
      {isLoading && <p>Loading comments...</p>}
      {error && <p>{error}</p>}
      {showComments ? (
        <>
          <button onClick={handleClickHide}>Hide Comments</button>
          {comments.length === 0 && (
            <>
              <p>No comments yet</p>
              <button>add comment</button>
            </>
          )}
          <ul>
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
        <button onClick={handleClickShow}>Show Comments</button>
      )}
    </>
  );
};

export default CommentSection;
