import type { Comment } from "@/types/api";

type CommentCardProps = { comment: Comment };
const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <li>
      <p>{comment.body}</p>
      <p>author: {comment.author}</p>
      <p>created at:{comment.created_at}</p>
      <p>votes:{comment.votes}</p>
    </li>
  );
};

export default CommentCard;
