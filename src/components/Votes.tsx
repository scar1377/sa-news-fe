"use client";

import { patchArticleById } from "@/utils/api";
import { useState } from "react";

type VotesProps = { article_id: string; initialVotes: number };
const Votes = ({ article_id, initialVotes }: VotesProps) => {
  const [newVote, setNewVote] = useState(0);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const [hasVotedOnce, setHasVotedOnce] = useState(false);
  const handleUpVote = async () => {
    hasDownVoted
      ? setNewVote((pre) => (pre += 2))
      : setNewVote((pre) => (pre += 1));
    setHasUpVoted(true);
    setHasDownVoted(false);
    setHasVotedOnce((pre) => !pre);
    let votes: number;
    votes = hasDownVoted ? 2 : 1;
    const res = await patchArticleById(article_id, { inc_votes: votes });
    if (!res.ok) {
      setNewVote((pre) => (pre -= 1));
      setHasUpVoted(false);
    }
  };
  const handleDownVote = async () => {
    hasUpVoted
      ? setNewVote((pre) => (pre -= 2))
      : setNewVote((pre) => (pre -= 1));

    setHasDownVoted(true);
    setHasUpVoted(false);

    let votes: number;
    votes = hasUpVoted ? -2 : -1;
    const res = await patchArticleById(article_id, { inc_votes: votes });
    if (!res.ok) {
      setNewVote((pre) => (pre += votes));

      setHasDownVoted(false);
    }
  };
  return (
    <>
      <button onClick={handleUpVote} disabled={hasUpVoted}>
        +
      </button>
      <span> {initialVotes + newVote} </span>
      <button onClick={handleDownVote} disabled={hasDownVoted}>
        -
      </button>
    </>
  );
};

export default Votes;
