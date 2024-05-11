import React from "react";
import HeadItem from "./headItem";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-x-5 bg-amber-100 dark:bg-gray-600 p-4 mt-5">
      <HeadItem title="Trending Movies" path="fetchTrending" />
      <HeadItem title="Top Rate Movies" path="fetchTopRated" />
    </div>
  );
};

export default Header;
