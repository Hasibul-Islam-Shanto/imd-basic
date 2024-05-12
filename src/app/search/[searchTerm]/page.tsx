import Card from "@/components/Card";
import React from "react";

const SearchResults = async ({
  params,
}: {
  params: { searchTerm: string };
}) => {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
        {results.map((movie: any) => (
          <>
            <Card key={movie.id} movie={movie} />
          </>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
