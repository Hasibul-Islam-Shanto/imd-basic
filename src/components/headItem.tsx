"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
type PropsType = {
  title: string;
  path: string;
};
const HeadItem = ({ title, path }: PropsType) => {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Link
        href={`/?genre=${path}`}
        className={`text-lg font-semibold ${
          genre === path &&
          "underline underline-offset-8 decoration-amber-500 decoration-4"
        }`}
      >
        {title}
      </Link>
    </Suspense>
  );
};

export default HeadItem;
