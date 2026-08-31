"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ChangeEvent } from "react";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const order = searchParams.get("order") ?? "desc";
  const sortBy = searchParams.get("sort_by") ?? "created_at";

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
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2">
        <label htmlFor="sort-by">Sort by</label>
        <select
          id="sort-by"
          onChange={handleChange}
          value={sortBy}
          className="bg-white border-2 border-orange-200 text-orange-500 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 hover:border-orange-400 cursor-pointer transition duration-200 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        >
          <option value="created_at">date</option>
          <option value="votes">votes</option>
          <option value="comment_count">comments</option>
        </select>
      </div>

      <button
        onClick={handleClick}
        className="bg-orange-50 text-orange-500 px-2 py-1.5 sm:px-3 sm:py-2 hover:text-orange-700 cursor-pointer transition duration-200 text-sm outline-orange-500focus:outline-none focus:ring-2 focus:ring-orange-200"
      >
        {order === "desc" ? "↓ Desc" : "↑ Asc"}
      </button>
    </div>
  );
};

export default Search;
