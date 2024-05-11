import fetchData from "@/api/fetchData";
import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";
import React from "react";

type PropsType = {
  searchParams: {
    genre: string;
  };
};
const Home = async ({ searchParams }: PropsType) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetchData(genre);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log("🚀 ~ Home ~ results:", results);

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
        {results.map((movie: any) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
