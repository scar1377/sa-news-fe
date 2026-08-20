"use client";

import { deleteCommentById } from "@/utils/api";
import { useState } from "react";

type DeleteButtonProps = {
  comment_id: number;
  onDeleteSuccess: (id: number) => void;
};
const DeleteButton = ({ comment_id, onDeleteSuccess }: DeleteButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setIsDeleting(true);
    setError("");
    const res = await deleteCommentById(comment_id);
    setIsDeleting(false);
    if (!res.ok) {
      setError("Oops, something went wrong. Try again later");
    } else {
      onDeleteSuccess(comment_id);
    }
  };
  return (
    <>
      <button onClick={handleClick}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {error && <p>{error}</p>}
    </>
  );
};

export default DeleteButton;
