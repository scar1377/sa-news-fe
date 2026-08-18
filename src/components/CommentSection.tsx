"use client";

import type { Comment } from "@/types/api";
import { getCommentsByArticleId } from "@/utils/api";
import { useState } from "react";
import CommentCard from "./CommentCard";

type CommentSectionProps = { article_id: string };
const CommentSection = ({ article_id }: CommentSectionProps) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClickShow = async () => {
    setShowComments((preShowStatus) => !preShowStatus);
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
    setShowComments((preShowStatus) => !preShowStatus);
  };
  return (
    <>
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
              <CommentCard key={comment.comment_id} comment={comment} />
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
