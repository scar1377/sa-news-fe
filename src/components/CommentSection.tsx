"use client";

import { Comment } from "@/types/api";
import { getCommentsByArticleId } from "@/utils/api";
import { useState } from "react";
import CommentCard from "./CommentCard";

type CommentSectionProps = { article_id: string };
const CommentSection = ({ article_id }: CommentSectionProps) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const handleClickShow = async () => {
    setShowComments((preShowStatus) => !preShowStatus);
    const result = await getCommentsByArticleId(article_id);
    setComments(result.comments);
  };
  const handleClickHide = async () => {
    setShowComments((preShowStatus) => !preShowStatus);
  };
  return (
    <>
      {showComments ? (
        <>
          <button onClick={handleClickHide}>Hide Comments</button>
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
