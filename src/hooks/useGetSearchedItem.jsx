import { SearchContext } from "@/context/search.context";
import apiClient from "@/services/api-client";
import { useContext, useEffect, useState } from "react";

const useGetSearchedItem = () => {
  const { searchTerm } = useContext(SearchContext);
  const [loading, setLoading] = useState(false);

  const [searchItem, setSearchItem] = useState();
  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await apiClient.get("/search/multi", {
        params: {
          query: searchTerm,
        },
      });

      setSearchItem(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log("Error in usegetSearchItem hook", error);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchItems();
  }, [searchTerm]);

  return { loading, searchItem };
};

export default useGetSearchedItem;
