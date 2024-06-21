import MovieList from '@/components/ReactComponents/MovieList'
import Player from '@/components/ReactComponents/Player'
import SearchItem from '@/components/ReactComponents/SearchItem'
import Trending from '@/components/ReactComponents/Trending'
import TvShowsList from '@/components/ReactComponents/TvShowsList'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const MovieRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Trending/>}></Route>
        <Route path='/movies' element={<MovieList/>}></Route>
        <Route path='/tvshows' element={<TvShowsList/>}></Route>
        <Route path='/search/:searchname' element={<SearchItem/>}></Route>
        <Route path='player/:id' element={<Player/>}></Route>
    </Routes>
  )
}

export default MovieRoutes