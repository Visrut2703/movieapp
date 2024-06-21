import apiClient from "@/services/api-client";

import { useEffect, useState } from "react";

const useGetMovieList = (genreId) => {
  const [movieList, setMovieList] = useState();
  const [loading, setLoading] = useState(false);

  genreId = genreId ? genreId : null;
  const fetchMovieList = async () => {
    setLoading(true);
    try {
      console.log(genreId);
      const res = await apiClient.get("/discover/movie", {
        params: {
          with_genres: genreId,
        },
      });
      setMovieList(res.data.results);
    } catch (error) {
      console.log("Error Accoured in useGetMovieList hook", error);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchMovieList();
  }, [genreId]);
  return { loading, movieList };
};

export default useGetMovieList;
