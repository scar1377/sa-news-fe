"use client";
import type { Comment } from "@/types/api";
import { postCommentByArticleId } from "@/utils/api";
import {
  type Dispatch,
  type SubmitEvent,
  type SetStateAction,
  type ChangeEvent,
  useState,
} from "react";
type CommentAdderProps = {
  article_id: string;
  setComments: Dispatch<SetStateAction<Comment[]>>;
  setCommentCount: Dispatch<SetStateAction<number>>;
};

const CommentAdder = ({
  article_id,
  setComments,
  setCommentCount,
}: CommentAdderProps) => {
  const [newCommentInput, setNewCommentInput] = useState("");
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentInput(e.target.value);
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsPosting(true);
    setError("");
    const res = await postCommentByArticleId(article_id, {
      username: "grumpy19",
      body: newCommentInput,
    });

    if (!res.ok) {
      setIsPosting(false);
      setError("Oops, something has gone wrong... Please try again.");
    } else {
      setIsPosting(false);
      setComments((currComments) => [res.comment, ...currComments]);
      setCommentCount((pre) => pre + 1);
      setNewCommentInput("");
    }
  };
  return (
    <>
      <h2>Comment posting form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Add Comment:</label>
        <textarea
          placeholder="Add your comment here..."
          id="new-comment"
          onChange={handleChange}
          value={newCommentInput}
        ></textarea>
        <button type="submit" disabled={isPosting || !newCommentInput.trim()}>
          {isPosting ? "Posting..." : "Send"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default CommentAdder;
