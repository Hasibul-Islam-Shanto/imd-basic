import fetchMovie from "@/api/fetchMovie";
import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Movie = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <>
      <div>
        <div
          className="w-full h-[75vh] mx-auto bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            })`,
          }}
        >
          <div className="w-full h-[75vh] bg-[#301D1F] bg-opacity-70">
            <div className="w-full overflow-x-auto flex flex-col lg:flex-row h-full items-center justify-center gap-10 p-10 ">
              <Image
                src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }`}
                width={600}
                height={400}
                alt="movie poster"
                className="rounded-lg"
              />
              <div className="flex flex-col space-y-5 text-white p-4">
                <h1 className="text-5xl font-bold">
                  {movie.title} (
                  {movie?.release_date?.split("-")[0] ||
                    movie?.first_air_date?.split("-")[0]}
                  )
                </h1>

                {movie.genres && (
                  <div className="flex gap-2">
                    {movie.genres.map((genre: any) => (
                      <p key={genre.id} className="text-lg">
                        {genre.name}
                        {movie.genres.length > 1 ? "," : ""}
                      </p>
                    ))}
                  </div>
                )}
                <p className="text-xl">{movie.overview}</p>
                <div className="flex items-center gap-x-2">
                  <FiThumbsUp className="text-2xl text-white" />
                  <p className="flex items-center">{movie.vote_count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
