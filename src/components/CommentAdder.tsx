"use client";
import useUser from "@/contexts/useUser";
import type { Comment } from "@/types/api";
import { postCommentByArticleId } from "@/utils/api";
import { type SubmitEvent, type ChangeEvent, useState } from "react";
type CommentAdderProps = {
  article_id: string;
  onPostSuccess: (comment: Comment) => void;
};

const CommentAdder = ({ article_id, onPostSuccess }: CommentAdderProps) => {
  const [newCommentInput, setNewCommentInput] = useState("");
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const { user } = useUser();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentInput(e.target.value);
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsPosting(true);
    setError("");
    if (user) {
      const res = await postCommentByArticleId(article_id, {
        username: user.username,
        body: newCommentInput,
      });

      if (!res.ok) {
        setIsPosting(false);
        setError("Oops, something has gone wrong... Please try again.");
      } else {
        setIsPosting(false);
        onPostSuccess(res.comment);
        setNewCommentInput("");
      }
    }
  };
  return (
    <>
      <h2>Comment posting form</h2>
      {user ? (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="new-comment">Add Comment:</label>
            <textarea
              placeholder="Add your comment here..."
              id="new-comment"
              onChange={handleChange}
              value={newCommentInput}
            ></textarea>
            <button
              type="submit"
              disabled={isPosting || !newCommentInput.trim()}
            >
              {isPosting ? "Posting..." : "Send"}
            </button>
          </form>
          {error && <p>{error}</p>}
        </>
      ) : (
        <p>Please login to comment</p>
      )}
    </>
  );
};

export default CommentAdder;
