import React from "react";
import HeadItem from "./headItem";
import { Suspense } from "react";
const Header = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div className="flex justify-center items-center gap-x-5 bg-amber-100 dark:bg-gray-600 p-4 mt-5">
        <HeadItem title="Trending Movies" path="fetchTrending" />
        <HeadItem title="Top Rate Movies" path="fetchTopRated" />
      </div>
    </Suspense>
  );
};

export default Header;
