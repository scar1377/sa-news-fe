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
      return;
    }
    onDeleteSuccess(comment_id);
  };
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleClick}
        disabled={isDeleting}
        className="self-start rounded-md border-2 border-red-200 bg-white px-3 py-1.5 text-sm text-red-600 transition duration-200 hover:border-red-300 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default DeleteButton;
