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

    if (!user) return;
    setIsPosting(true);
    setError("");
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
  };
  return (
    <div className="flex flex-col gap-3">
      {user ? (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label
              htmlFor="new-comment"
              className="text-sm font-medium text-neutral-700"
            >
              Add Comment:
            </label>
            <textarea
              placeholder="Add your comment here..."
              id="new-comment"
              onChange={handleChange}
              value={newCommentInput}
              className="w-full rounded-md border-2 border-orange-200 bg-white px-3 py-2 text-base text-neutral-700 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            ></textarea>
            <button
              type="submit"
              disabled={isPosting || !newCommentInput.trim()}
              className="self-start rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isPosting ? "Posting..." : "Send"}
            </button>
          </form>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </>
      ) : (
        <p className="text-sm text-neutral-500">Please login to comment</p>
      )}
    </div>
  );
};

export default CommentAdder;
