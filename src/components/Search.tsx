"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ChangeEvent } from "react";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const order = searchParams.get("order") ?? "desc";

  const params = new URLSearchParams(searchParams.toString());
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    params.set("sort_by", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };
  const handleClick = () => {
    const nextOrder = order === "desc" ? "asc" : "desc";

    params.set("order", nextOrder);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <span>Sort by</span>
      <select onChange={handleChange}>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
      <button onClick={handleClick}>
        {order === "desc" ? "Z->A" : "A->Z"}
      </button>
    </>
  );
};

export default Search;
