import apiClient from '@/services/api-client';

import { useEffect, useState } from 'react'

const useGetTrendingList = () => {
  const [trendingList, setTrendingList] = useState();

  const [loading, setLoading] = useState(false);

  const fetchItems =async ()=>{
    setLoading(true)
    try{
        const res = await apiClient.get(`trending/all/day`);
        setTrendingList(res.data.results);
        console.log(res.data.results)
    }   
    catch(e){
        console.log("Error in use Get Trending items " , e);
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchItems();
  } , []);
  return {loading, trendingList};
}

export default useGetTrendingList