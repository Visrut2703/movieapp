import { SearchContext } from "@/context/search.context";
import useGetSearchedItem from "@/hooks/useGetSearchedItem";
import React, { useContext } from "react";
import TvShowsCard from "./TvShowsCard";

const SearchItem = () => {
  const { searchItem } = useGetSearchedItem();
  return (
    <div>
      {searchItem?.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {searchItem?.map((tvshow) => (
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

export default SearchItem;
