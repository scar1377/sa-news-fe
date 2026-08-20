"use client";

import { deleteCommentById } from "@/utils/api";

type DeleteButtonProps = {
  comment_id: number;
  onDeleteSuccess: (id: number) => void;
};
const DeleteButton = ({ comment_id, onDeleteSuccess }: DeleteButtonProps) => {
  const handleClick = async () => {
    const res = await deleteCommentById(comment_id);
    if (!res.ok) {
    } else {
      onDeleteSuccess(comment_id);
    }
  };
  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteButton;
