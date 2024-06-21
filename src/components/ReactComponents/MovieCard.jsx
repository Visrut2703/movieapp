import React from "react";
import {
  Card,
  CardContent,

} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">

    <Card className="border-0 hover:cursor-pointer" onClick={()=>navigate(`/player/${movie.id}`)}>
      <CardContent>
        <div>
            <img  src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.name}` } className="hover:opacity-80 transition-all lg:h-500 md:h-400 sm:h-100 h-500"/>
            <h1 className="mt-2 text-l text-center ">{movie.title?movie.title : movie.name}</h1>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default MovieCard;
