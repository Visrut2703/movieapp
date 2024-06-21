import apiClient from "@/services/api-client";
import  { useEffect, useState } from "react";

const useGetTvShowsList = (genreId) => {
  const [loading, setLoading] = useState(false);

  const [tvShowsList, setTvShowsList] = useState();
  genreId = genreId ? genreId : null;
  const fetchMovieList = async () => {
    setLoading(true)
    try {
      const res = await apiClient.get("/discover/tv", {
        params: {
          with_genres: genreId,
        },
      });
      setTvShowsList(res.data.results);
    } catch (error) {
      console.log("Error Accoured in useGetMovieList hook", error);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchMovieList();
  }, [genreId]);
  return {loading, tvShowsList };
};

export default useGetTvShowsList;
