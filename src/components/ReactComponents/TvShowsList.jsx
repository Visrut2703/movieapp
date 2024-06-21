import React, { useContext } from "react";
import TvShowsCard from "./TvShowsCard";
import useGetTvShowsList from "@/hooks/useGetTvShowsList";
import { GenreContext } from "@/context/genres.context";
import { Skeleton } from "@/components/ui/skeleton";

const TvShowsList = () => {
  const { genreId } = useContext(GenreContext);

  const { loading, tvShowsList } = useGetTvShowsList(genreId);
  return (
    <div>
      <h1 className="text-3xl m-4 font-bold text-center">TV Shows</h1>
      {loading ? (
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      ) : tvShowsList?.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {tvShowsList?.map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowsCard tvshow={tvshow} />
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

export default TvShowsList;
