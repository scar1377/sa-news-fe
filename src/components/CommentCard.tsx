import type { Comment } from "@/types/api";
import DeleteButton from "./DeleteButton";
import useUser from "@/contexts/useUser";

type CommentCardProps = {
  comment: Comment;
  onDeleteSuccess: (id: number) => void;
};
const CommentCard = ({ comment, onDeleteSuccess }: CommentCardProps) => {
  const { user } = useUser();
  return (
    <li>
      <p>{comment.body}</p>
      <p>author: {comment.author}</p>
      <p>created at:{comment.created_at}</p>
      <p>votes:{comment.votes}</p>
      {user?.username === comment.author && (
        <DeleteButton
          comment_id={comment.comment_id}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </li>
  );
};

export default CommentCard;
