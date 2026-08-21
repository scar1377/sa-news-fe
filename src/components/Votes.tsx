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
    if (!user) {
      alert("Please login to vote");
      return;
    }
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
    if (!user) {
      alert("Please login to vote");
      return;
    }
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
    <>
      <button onClick={handleUpVote} disabled={hasUpVoted || isVoting}>
        +
      </button>
      <span> {initialVotes + newVote} </span>
      <button onClick={handleDownVote} disabled={hasDownVoted || isVoting}>
        -
      </button>
    </>
  );
};

export default Votes;
