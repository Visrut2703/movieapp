import useGetTrendingList from '@/hooks/useGetTrendingList'
import React from 'react'
import TvShowsCard from './TvShowsCard';

const Trending = () => {
    const {trendingList} = useGetTrendingList(); 
  return (
    <div>
      <h1 className="text-3xl m-4 font-bold text-center">Trending Right Now!!</h1>
      {trendingList?.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {trendingList?.map((tvshow) => (
          <div key={tvshow.id}>
            <TvShowsCard tvshow={tvshow} />
          </div>
        ))}
        </div>
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <h1 className="text-center md:text-3xl sm:text-2xl 5xl font-bold">No Result Found</h1>
        </div>
      )}
    </div>
  )
}

export default Trending