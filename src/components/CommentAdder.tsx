"use client";
import { Comment } from "@/types/api";
import { postCommentByArticleId } from "@/utils/api";
import type { Dispatch, SubmitEvent, SetStateAction } from "react";
type CommentAdderProps = {
  article_id: string;
  setComments: Dispatch<SetStateAction<Comment[]>>;
};

const CommentAdder = ({ article_id, setComments }: CommentAdderProps) => {
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const res = await postCommentByArticleId(article_id, {
      username: "grumpy19",
      body: "Hard coded test comment",
    });
    console.log(res, "<<<<<<<<<<<");
    setComments((currComments) => [res, ...currComments]);
  };
  return (
    <>
      <h2>Comment posting form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Add Comment:</label>
        <textarea
          placeholder="Add your comment here..."
          id="new-comment"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default CommentAdder;
