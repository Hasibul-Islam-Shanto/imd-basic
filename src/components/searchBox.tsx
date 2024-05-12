"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBox = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div className="max-w-6xl mx-auto py-2">
      <form
        onSubmit={handleSubmit}
        className="flex border-[1px] border-gray-500 px-3 rounded-lg"
      >
        <input
          type="text"
          placeholder="Search you movie"
          className="w-full p-4 outline-none dark:bg-transparent"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
