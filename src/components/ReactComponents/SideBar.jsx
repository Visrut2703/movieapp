import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import Genres from "./Genres";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>


<FontAwesomeIcon icon={faBars} />

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Genres />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={"/movies"}>
            <div>Movies</div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={"/tvshows"}>
            <div>Tv Shows</div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SideBar;
