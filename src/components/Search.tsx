"use client";

import { usePathname, useRouter } from "next/navigation";

import { ChangeEvent } from "react";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(`${pathname}?sort_by=${e.target.value}`);
  };
  return (
    <>
      <span>Sort by</span>
      <select onChange={handleChange}>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
    </>
  );
};

export default Search;
