"use client";

import useUser from "@/contexts/useUser";
import { patchArticleById } from "@/utils/api";
import { useState } from "react";

type VotesProps = { article_id: string; initialVotes: number };
const Votes = ({ article_id, initialVotes }: VotesProps) => {
  const [newVote, setNewVote] = useState(0);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);

  const { user } = useUser();

  const handleUpVote = async () => {
    if (!user) return;

    const wasDownVoted = hasDownVoted;

    setIsVoting(true);

    const voteChange = hasDownVoted ? 2 : 1;
    setNewVote((pre) => pre + voteChange);

    setHasUpVoted(true);
    setHasDownVoted(false);

    const res = await patchArticleById(article_id, { inc_votes: voteChange });
    setIsVoting(false);
    if (!res.ok) {
      setNewVote((pre) => pre - voteChange);
      setHasUpVoted(false);
      setHasDownVoted(wasDownVoted);
    }
  };
  const handleDownVote = async () => {
    if (!user) return;

    const wasUpVoted = hasUpVoted;

    setIsVoting(true);
    const voteChange = hasUpVoted ? -2 : -1;
    setNewVote((pre) => pre + voteChange);
    setHasDownVoted(true);
    setHasUpVoted(false);

    const res = await patchArticleById(article_id, { inc_votes: voteChange });
    setIsVoting(false);

    if (!res.ok) {
      setNewVote((pre) => pre - voteChange);
      setHasDownVoted(false);
      setHasUpVoted(wasUpVoted);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {!user && (
        <p className="text-sm text-neutral-500">Please login to vote</p>
      )}
      <div className="flex items-center gap-3">
        <button
          onClick={handleUpVote}
          disabled={hasUpVoted || isVoting || !user}
          className="rounded-md border-2 border-orange-200 bg-white px-3 py-1 text-orange-500 transition duration-200 hover:border-orange-300 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          +
        </button>
        <span className="min-w-8 text-center font-medium text-neutral-700">
          {" "}
          {initialVotes + newVote}{" "}
        </span>
        <button
          onClick={handleDownVote}
          disabled={hasDownVoted || isVoting || !user}
          className="rounded-md border-2 border-orange-200 bg-white px-3 py-1 text-orange-500 transition duration-200 hover:border-orange-300 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Votes;
