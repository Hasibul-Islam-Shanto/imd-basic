"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
type PropsType = {
  title: string;
  path: string;
};
const HeadItem = ({ title, path }: PropsType) => {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <Link
      href={`/?genre=${path}`}
      className={`text-lg font-semibold ${
        genre === path &&
        "underline underline-offset-8 decoration-amber-500 decoration-4"
      }`}
    >
      {title}
    </Link>
  );
};

export default HeadItem;
