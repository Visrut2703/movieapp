import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import genresList from "@/misselanuous/genres";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenreContext } from "@/context/genres.context";
import { useLocation, useNavigate } from "react-router-dom";

const Genres = () => {
  const { genreId, setGenreId } = useContext(GenreContext);
  const genres = genresList;
  const navigate =  useNavigate();
  const location = useLocation();
  const onChange = (data)=>{
    setGenreId(data);
    location.pathname.startsWith('/movies') ? navigate('/movies') : navigate('/tvshows')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1 className="border-0 bg-white text-black hover:bg-white hover:border-0">
          Genres
        </h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={genreId} onValueChange={onChange}>
          {genres.map((genre) => (
            <DropdownMenuRadioItem key={genre.id} value={genre.id}>
              {genre.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Genres;
