import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = (movie: any) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.movie.id}`} className="flex flex-col">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.movie.backdrop_path || movie.movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie poster"
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2 flex flex-col">
          <h3 className="text-xl font-bold">
            {movie.movie.title || movie.movie.name}
          </h3>
          <p className="text-lg line-clamp-2">{movie.movie.overview}</p>
        </div>
        <div className="flex items-center justify-between p-3">
          <p>{movie.movie.release_date || movie.movie.first_air_date}</p>
          <div className="flex items-center gap-x-2">
            <FiThumbsUp className="text-2xl text-amber-500" />
            <p className="flex items-center">{movie.movie.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
