import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const TvShowsCard = ({tvshow}) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0 hover:cursor-pointer  " onClick={()=>navigate(`/player/${tvshow.id}`)}>
      <CardContent>
        <div>
            <img src={`http://image.tmdb.org/t/p/w300${tvshow.poster_path}`} alt={`${tvshow.name}` } className="hover:opacity-80 transition-all"/>
            <h1 className="mt-2 text-xl text-center ">{tvshow.title?tvshow.title : tvshow.name}</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default TvShowsCard;
