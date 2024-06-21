import useGetMovieList from "@/hooks/useGetMovieList.jsx";
import React, { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import { GenreContext } from "@/context/genres.context.jsx";

const MovieList = () => {
  const { genreId } = useContext(GenreContext);
  const { movieList } = useGetMovieList(genreId);

  return (
    <div>
      <h1 className="text-3xl m-4 font-bold text-center">Movies</h1>
      {movieList?.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center">
          {movieList?.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <h1 className="text-center md:text-3xl sm:text-2xl 5xl font-bold">
            No Result Found
          </h1>
        </div>
      )}
    </div>
  );
};

export default MovieList;
